import { createContext, useContext, useEffect, useState } from "react"

const BASEURL = "http://localhost:8000"
const CitiesContext = createContext()

// eslint-disable-next-line react/prop-types
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentCity, setCurrentCity] = useState({})

  useEffect(() => {
    async function fetchCities() {
      try {
        const res = await fetch(`${BASEURL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch {
        alert("There was an error loading data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchCities()
  }, [])

  async function getCity(id) {
    try {
      setIsLoading(true)
      const res = await fetch(`${BASEURL}/cities/${id}`)
      const data = await res.json()
      setCurrentCity(data)
    } catch {
      alert("")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  )
}

function useCities() {
  const context = useContext(CitiesContext)
  if (context === undefined)
    throw new Error("CityContext was used outside the CitiesProvider")
  return context
}

export { CitiesProvider, useCities }
