// export default function Reserva() {
//     return(
//         <>
//         </>
//     )
// }
import React from "react";
import "../styles/Reserva.css";
import { Link } from "react-router-dom";

function VistaReservas() {
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


      <h2 style={{ marginTop: "2rem" }}>Valida si tu reserva es la correcta ✨</h2>

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

export default VistaReservas;
