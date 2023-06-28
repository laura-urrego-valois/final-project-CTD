import { useState, useEffect } from "react"
import "./HistoryReservation.css"
import { useGlobalState } from "../../context"

// function convertirFecha(originalDate) {
//   let fecha = originalDate.split("-")
//   return fecha[2] + "/" + fecha[1] + "/" + fecha[0]
// }

export const HistoryReservation = () => {
  const [reservations, setReservations] = useState([])
  const { user, fetchReservations } = useGlobalState()

  useEffect(() => {
    const getReservations = async () => {
      if (user) {
        const data = await fetchReservations(user.id)
        setReservations(data.data)
      }
    }
    getReservations()
  }, [])

  if (!reservations) return <h3>Cargando...</h3>
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
                <td>{reservation?.id}</td>
                <td>{reservation?.startTime}</td>
                <td>{reservation?.finalDate}</td>
                <td>{reservation?.startTime}</td>
                {/* Mostrar otros detalles de la reserva */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
