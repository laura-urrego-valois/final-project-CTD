import React, { useState, useEffect } from 'react';
import "./HistoryReservation.css";

function convertirFecha(originalDate) {
  let fecha = originalDate.split("-");
  return fecha[2] + "/" + fecha[1] + "/" + fecha[0];

}

export const HistoryReservation = () => {
    const reservas = [
        {
            "id" : 4,
            "tourName": "Maldivas",
            "reservationDate": "2023-05-13",
            "initialDate": "2023-07-04",
            "finalDate": "2023-07-10"
        },
        {
            "id" : 7,
            "tourName": "Guayana",
            "reservationDate": "2023-05-11",
            "initialDate": "2023-07-06",
            "finalDate": "2023-07-16"
        },
        {
            "id" : 10,
            "tourName": "Berlin",
            "reservationDate": "2023-05-01",
            "initialDate": "2023-07-24",
            "finalDate": "2023-07-30"
        }
    ];

    return (
    <div>
      <h2>Mis Reservas</h2>
      <table id="reservationsTable">
        <thead>
          <tr>
            <th>Tour</th>
            <th>Fecha Reservación</th>
            <th>Fecha de uso</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(reserva => (
            <tr key={reserva.id}>
              <td>{reserva.tourName}</td>
              <td>{convertirFecha(reserva.reservationDate)}</td>
              <td>{convertirFecha(reserva.initialDate)} - {convertirFecha(reserva.finalDate)}</td>
              {/* Mostrar otros detalles de la reserva */}
            </tr>
          ))}
        </tbody>
      </table>
      
  </div>
    );
}


