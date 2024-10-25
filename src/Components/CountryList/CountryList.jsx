import Spinner from "../Spinner/Spinner";
import CountryItem from "../CountryItem/CountryItem";
import Message from "../Message/Message";
import styles from "./CountryList.module.css";

import { PropTypes } from "prop-types";
import { useCities } from "../../Contexts/CitiesContext";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countriesSet = [
    ...new Set(
      cities.map((city) =>
        JSON.stringify({ country: city.country, emoji: city.emoji })
      )
    ),
  ];
  const countries = countriesSet.map((country) => JSON.parse(country));

  // const countries = cities.reduce((arr, city) => {
  //   if (!arr.map((el) => el.country).includes(city.country))
  //     return [...arr, { country: city.country, emoji: city.emoji }];
  // }, []);

  return (
    <ul className={styles["countryList"]}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </ul>
  );
}

export default CountryList;

CountryList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};
