import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { flagemojiToPNG } from "../../Helpers/helpers";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const { deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles["cityItem"]} ${
          currentCity.id === id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles["emoji"]}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles["name"]}>{cityName}</h3>
        <time className={styles["date"]}>{formatDate(date)}</time>
        <button className={styles["deleteBtn"]} onClick={(e) => handleClick(e)}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;

import { PropTypes } from "prop-types";
import { useCities } from "../../Contexts/CitiesContext";

CityItem.propTypes = {
  city: PropTypes.object,
};
