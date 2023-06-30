import { useState } from "react"
import { DateRange } from "react-date-range"
import "./dates.css"
import { Button } from "../Button"
import { useNavigate } from "react-router"
import { useGlobalState } from "../../context"
import { format } from "date-fns"

export const DatesPicker = ({ tour }) => {
  const { user } = useGlobalState()
  const navigate = useNavigate()
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ])

  const handleDatesSelected = (item) => {
    setState([item.selection])
  }

  const handleClick = () => {
    localStorage.setItem(
      "booking",
      JSON.stringify({
        idTour: tour?.id,
        idUser: user?.id || null,
        startTime: "11:00:00",
        initialDate: format(state[0]?.startDate, "yyyy-MM-dd"),
        finalDate: format(state[0]?.endDate, "yyyy-MM-dd"),
        tourImage: tour?.images[0]?.imageUrl,
        tourName: tour?.tourName,
        tourPrice: tour?.tourPrice,
      })
    )

    if (user) {
      return navigate(`/booking/${tour?.id}`)
    }
    return navigate("/login")
  }

  return (
    <section className="dates">
      <h2 className="dates__title">Fechas Disponibles</h2>
      <div className="dates__calendar">
        <DateRange
          editableDateInputs={true}
          onChange={handleDatesSelected}
          moveRangeOnFirstSelection={false}
          ranges={state}
          months={2}
          direction="horizontal"
          minDate={new Date()}
        />
        <div className="dates__button">
          <Button onClick={handleClick}>Reservar</Button>
        </div>
      </div>
    </section>
  )
}
