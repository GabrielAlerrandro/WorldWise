import CityItem from "../CityItem/CityItem"
import Message from "../Message/Message"
import Spinner from "../Spinner/Spinner"
import styles from "./CityList.module.css"
export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city in the map" />
    )
  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  )
}
