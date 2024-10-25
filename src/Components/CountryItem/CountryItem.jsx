import styles from "./CountryItem.module.css";
import { flagemojiToPNG } from "../../Helpers/helpers";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(country.emoji)}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;

import { PropTypes } from "prop-types";

CountryItem.propTypes = {
  country: PropTypes.object,
};