import CountryItem from "../CountryItem/CountryItem"
import Message from "../Message/Message"
import Spinner from "../Spinner/Spinner"
import styles from "./CountryList.module.css"
export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map" />
    )

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((ele) => ele.countryf).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }]
    } else {
      return arr
    }
  }, [])

  return (
    <ul className={styles.CityList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  )
}
