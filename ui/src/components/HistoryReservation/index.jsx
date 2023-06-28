import { useState, useEffect } from "react"
import "./HistoryReservation.css"
import { useGlobalState } from "../../context"

export const HistoryReservation = () => {
  const [reservations, setReservations] = useState([])
  const { user, fetchReservations, fetchTourById, state } = useGlobalState()

  useEffect(() => {
    const getReservations = async () => {
      if (user) {
        const data = await fetchReservations(user.id)
        setReservations(data.data)
      }
    }
    getReservations()
  }, [])

  const getTourName = async (tourId) => {
    const reservation = state?.tours?.find((item) => item.id == tourId)
    return reservation ? reservation?.tourName : tourId
  }

  return (
    <div>
      <h2>Mis Reservas</h2>
      {reservations.length === 0 ? (
        <h3>Buscando reservas</h3>
      ) : (
        <table id="reservationsTable">
          <thead>
            <tr>
              <th>Tour</th>
              <th>Fecha Inicio</th>
              <th>Fecha Final</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation?.id}>
                <td>{reservation?.idTour}</td>
                {/* <td>{getTourName(reservation?.idTour)}</td> */}
                <td>{reservation?.startTime}</td>
                <td>{reservation?.finalDate}</td>
                <td>{reservation?.startTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
