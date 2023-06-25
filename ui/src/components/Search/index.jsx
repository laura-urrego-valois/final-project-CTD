/* eslint-disable react/display-name */
import { Input } from "../../components/Input"
import { Button } from "../Button"
//import Location from "../../assets/localizador.svg"
import Select from 'react-select';
import Calendar from "../../assets/calendar.svg"
import "./Search.css"
import { forwardRef, useState } from "react"

import DatePicker from "react-datepicker"
import { addDays } from "date-fns"
import { useGlobalState } from "../../context"

export const Search = () => {
  const { state, fetchToursByCountry } = useGlobalState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(null)
  const onChange = (dates) => {
    const [start, end] = dates
    setStartDate(start)
    setEndDate(end)
  }
  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": [
        addDays(new Date(), 3),
        addDays(new Date(), 2),
        addDays(new Date(), 1),
      ],
    },
    {
      "react-datepicker__day--highlighted-custom-2": [
        addDays(new Date(), 11),
        addDays(new Date(), 12),
        addDays(new Date(), 13),
        addDays(new Date(), 15),
      ],
    },
  ]

  const ExampleCustomInput = forwardRef(
    (
      {
        // value,
        onClick,
      },
      ref
    ) => (
      <Input
        iconSrc={Calendar}
        placeholder="Check in - Check out"
        className="input-calendar"
        onClick={onClick}
        ref={ref}
      // placeholder={value}
      />
    )
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
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          minDate={startDate}
          endDate={endDate}
          selectsRange
          withPortal
          highlightDates={highlightWithRanges}
          monthsShown={2}
          shouldCloseOnSelect={false}
          customInput={<ExampleCustomInput />}
        />

        <Button type="primary">Buscar</Button>
      </form>
    </section>
  )
}
