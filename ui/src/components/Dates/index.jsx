import "./Dates.css"
import { useState } from "react"
import DatePicker from "react-datepicker"
import { addDays } from "date-fns"

export const Dates = () => {
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

  return (
    <section className="dates">
      <h2 className="dates__title">Fechas disponibles</h2>
      <div className="dates__calendar">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          minDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          highlightDates={highlightWithRanges}
          monthsShown={2}
          shouldCloseOnSelect={false}
        />
      </div>
    </section>
  )
}
