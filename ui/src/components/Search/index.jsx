/* eslint-disable react/display-name */
import { Input } from "../../components/Input"
import { Button } from "../Button"
//import Location from "../../assets/localizador.svg"
import Select from 'react-select';
import Calendar from "../../assets/calendar.svg"
import "./Search.css"
import { useEffect, useRef, useState } from "react"
import { addDays, format } from "date-fns"
import { useGlobalState } from "../../context"
import { DateRange } from "react-date-range"

export const Search = () => {
  const { state, fetchToursByCountry } = useGlobalState()
  const [open, setOpen] = useState(false)
  const refOne = useRef(null)
  const [range, setRange] = useState([
    {
      startDate: addDays(new Date(), 4),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ])

  const handleHide = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleHide)
  }, [])

  console.log(
    `${format(range[0].startDate, "dd/MM/yyyy")} a ${format(
      range[0].endDate,
      "dd/MM/yyyy"
    )}`
  )
  const options = state?.countries?.map(({ countryName, id }) => ({
    value: id,
    label: countryName
  }));

  const handleSelectChange = (selectedOption) => {
    const countryId = selectedOption.value;
    fetchToursByCountry(countryId);
  };

  console.log("stateSearch", state)
  return (
    <section className="search">
      <h1 className="search__title">Busca ofertas de experiencia turística</h1>
      <form action="" className="search-form">
        <Select
          placeholder="Búsqueda por país"
          className="search__select"
          options={options}
          onChange={handleSelectChange}
          isSearchable
        />

        <Input
          iconSrc={Calendar}
          placeholder="Check in - Check out"
          className="input-calendar"
          value={`${format(range[0].startDate, "dd/MM/yyyy")} a ${format(
            range[0].endDate,
            "dd/MM/yyyy"
          )}`}
          readOnly={true}
          onClick={() => setOpen((open) => !open)}
        />

        <div ref={refOne} className="calendar__search">
          {open && (
            <DateRange
              ref={refOne}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={2}
              direction="horizontal"
              onChange={(item) => setRange([item.selection])}
            />
          )}
        </div>

        <Button type="primary">Buscar</Button>
      </form>
    </section>
  )
}
