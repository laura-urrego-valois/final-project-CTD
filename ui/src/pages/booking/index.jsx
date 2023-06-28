import { Link, useNavigate } from "react-router-dom"
import { Container } from "../../components/Container"
import { Politics } from "../../components/Politics"
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import "./booking.css"
import { Input } from "../../components/Input"
import { DatesPicker } from "../../components/DatesPicker"
import { Button } from "../../components/Button"
import { useEffect, useState } from "react"
import { useGlobalState } from "../../context"

export const BookingPage = () => {
  const { user, createReservation } = useGlobalState()
  const [bookingDetail, setBookingDetail] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    const booking = JSON.parse(localStorage.getItem("booking"))
    if (booking) {
      setBookingDetail(booking)
    }
  }, [])

  const handleBookingClick = async (e) => {
    e.preventDefault()
    const response = await createReservation({
      initialDate: bookingDetail?.initialDate,
      finalDate: bookingDetail?.finalDate,
      startTime: bookingDetail?.startTime,
      idTour: parseInt(bookingDetail?.idTour),
      idUser: parseInt(user?.id),
    })

    !response ? navigate("/booking-success") : navigate("/booking-failure")
  }

  return (
    <Container>
      <div className="detail">
        <div>
          <h1 className="detail__title">Detalle Reserva</h1>
        </div>
        <Link className="detail__icon" to="/">
          <BsFillArrowLeftCircleFill />
        </Link>
      </div>
      <section className="booking__container">
        <div className="booking__right">
          <form className="booking__form">
            <h3>Tus datos</h3>
            <Input
              displayLabel="Nombre"
              label="userFirstName"
              type="text"
              onChange={(e) => console.log(e.target.value)}
              value={user?.userFirstName}
              disabled
            />
            <Input
              displayLabel="Apellido"
              label="userLastName"
              type="text"
              onChange={(e) => console.log(e.target.value)}
              value={user?.userLastName}
              disabled
            />
            <Input
              displayLabel="Email"
              label="userName"
              type="text"
              onChange={(e) => console.log(e.target.value)}
              value={user?.username}
              disabled
            />
          </form>
          <div className="booking__calendar">
            <DatesPicker />
          </div>
          <form className="booking__time">
            <h3>Tu hora</h3>
            <Input
              displayLabel="Hora de Inicio"
              label="time"
              type="time"
              onChange={(e) => console.log(e.target.value)}
            />
          </form>
        </div>
        <div className="booking__detail">
          <h4>Detalle de la reserva</h4>
          <img src={bookingDetail?.tourImage} />
          <h4>{bookingDetail?.tourName}</h4>
          <p>Precio: ${bookingDetail?.tourPrice}USD</p>
          <form>
            <Input
              displayLabel="Fecha Inicio"
              label="initialDate"
              value={bookingDetail?.initialDate}
              onChange={(e) => console.log(e.target.value)}
              type="text"
              disabled
            />
            <Input
              displayLabel="Fecha Final"
              label="finalDate"
              value={bookingDetail?.finalDate}
              onChange={(e) => console.log(e.target.value)}
              type="text"
              disabled
            />
            <Button type="primary" onClick={(e) => handleBookingClick(e)}>
              Reservar
            </Button>
          </form>
        </div>
      </section>
      <Politics />
    </Container>
  )
}
