import React from "react";
import "../styles/historial.css";
import { Link } from "react-router-dom";

let reservas = [
  {
    id: 1,
    servicio: "Asado Completo",
    cantidad: 5,
    fecha: "2025-06-20 18:00",
    vencido: true,
  },
  {
    id: 2,
    servicio: "Parrillada",
    cantidad: 2,
    fecha: "2025-06-15 13:00",
    vencido: true,
  },
  {
    id: 3,
    servicio: "Carne Premium",
    cantidad: 4,
    fecha: "2025-06-10 19:30",
    vencido: true,
  },
  {
    id: 4,
    servicio: "Carne XL Premium",
    cantidad: 6,
    fecha: "2025-06-10 20:30",
    vencido: true,
  },
  {
    id: 5,
    servicio: "Carne Asada",
    cantidad: 7,
    fecha: "2025-06-10 21:30",
    vencido: true,
  },
  {
    id: 6,
    servicio: "Pollo ala Parrilla",
    cantidad: 5,
    fecha: "2025-06-10 16:30",
    vencido: true,
  },
];

function HistorialReservas() {
  return (
    <>
    <div className="back"></div>
    <div className="historial-container">
      <div className="header">
        <div>
          <span>Inicio &gt;</span>
          <strong>Historial de Reservas</strong>
        </div>
        <div>
          <span>
            Juan Perez <img src="user.png" />
          </span>
          
          <Link to="/Home" className="logout-button">
            Cerrar Sesión <img src="Salir.png" />
          </Link>
        </div>
      </div>
      

      <h2 style={{ marginTop: "2rem" }}>Historial de Reservas</h2>

      <table className="reservas-table">
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Cantidad de personas</th>
            <th>Fecha y hora de la reserva</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(function (r) {
            return (
              <tr key={r.id}>
                <td>{r.servicio}</td>
                <td>{r.cantidad}</td>
                <td>{r.fecha}</td>
                <td>{r.vencido ? "VENCIDO" : "Activo"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default HistorialReservas;
