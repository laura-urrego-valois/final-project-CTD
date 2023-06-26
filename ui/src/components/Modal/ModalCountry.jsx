import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../Button"
import { GrFormClose } from "react-icons/gr"

import "./Modal.css"
import {
  getCountries,
  getCountryCapital,
  getCountryPositions,
} from "../../utils/Country"

export const ModalCountry = ({
  onClose,
  editMode,
  country,
  handleFormSubmit,
  countryForm,
}) => {
  const { register, handleSubmit, setValue } = useForm()
  const [allCountries, setAllCountries] = useState([])
  const [valueSelect, setValueSelect] = useState(allCountries[0])
  const [capital, setCapital] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  const handleChange = async (event) => {
    setValueSelect(event.target.value)
    const capitalName = await getCountryCapital(event.target.value)
    setCapital(capitalName.data.data.capital)
    if (capitalName) {
      const location = await getCountryPositions(event.target.value)
      setLatitude(location.data.data.lat)
      setLongitude(location.data.data.long)
    }
  }

  useEffect(() => {
    const countryData = async () => {
      const countries = await getCountries()
      setAllCountries(countries.data.data)
    }
    countryData()
  }, [])

  useEffect(() => {
    if (editMode && countryForm) {
      setValue("countryName", countryForm.countryName)
      setValue("capitalName", countryForm.capitalName)
      setValue("latitude", countryForm.latitude)
      setValue("longitude", countryForm.longitude)
    } else {
      setValue("countryName", "")
      setValue("capitalName", "")
      setValue("latitude", "")
      setValue("longitude", "")
    }
  }, [editMode, countryForm, setValue])

  return (
    <section className="modal__overlay">
      <div className="modal__content">
        <h3>{editMode ? "Editar País" : "Agregar País"}</h3>
        <form className="modal__form" onSubmit={handleSubmit(handleFormSubmit)}>
          <label>
            Nombre del país:
            <select
              id="countryName"
              name="countryName"
              value={valueSelect}
              onChange={handleChange}
              defaultValue={country?.countryName || ""}
              // {...register("countryName")}
            >
              {allCountries.map((countryInfo) => (
                <option key={countryInfo.name} value={countryInfo.name}>
                  {countryInfo.name}
                </option>
              ))}
            </select>
          </label>
          <input
            type="text"
            name="capitalName"
            id="capitalName"
            value={capital}
            defaultValue={country?.capitalName || ""}
            // {...register("capitalName")}
            disabled
          />

          <input
            type="text"
            name="latitude"
            id="latitude"
            value={latitude}
            defaultValue={country?.latitude || ""}
            // {...register("latitude")}
            disabled
          />

          <input
            type="text"
            name="longitude"
            id="longitude"
            value={longitude}
            defaultValue={country?.longitude || ""}
            // {...register("longitude")}
            disabled
          />

          <Button type="submit">{editMode ? "Guardar" : "Agregar"}</Button>
        </form>
        <span className="modal__close" onClick={onClose}>
          <GrFormClose />
        </span>
      </div>
    </section>
  )
}
