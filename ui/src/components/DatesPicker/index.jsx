import { useState } from "react"
import { DateRange } from "react-date-range"
import { addDays } from "date-fns"

export const DatesPicker = () => {
  const [state, setState] = useState([
    {
      startDate: addDays(new Date(), 4),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ])

  //   const handleDatesSelected = (ranges) => {
  //     console.log(ranges)
  //   }
  return (
    <section className="dates">
      <h2 className="dates__title">Fechas Disponibles</h2>
      <DateRange
        editableDateInputs={true}
        // onChange={handleDatesSelected}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        months={2}
        direction="horizontal"
        minDate={new Date()}
      />
    </section>
  )
}
