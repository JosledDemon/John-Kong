import React from 'react';
import './Historial.css';


let reservas = [
  { id: 1, servicio: "Asado Completo", cantidad: 5, fecha: "2025-06-20 18:00", vencido: true },
  { id: 2, servicio: "Parrillada", cantidad: 2, fecha: "2025-06-15 13:00", vencido: true },
  { id: 3, servicio: "Carne Premium", cantidad: 4, fecha: "2025-06-10 19:30", vencido: true },
];


function HistorialReservas() {
    return(
        <div className="historial-container">
            <div className="header">
                <div>
                    <span>Inicio &gt;</span>
                    <strong>Historial de Reservas</strong>
                </div>
                <div>
                    <span>Juan Perez👤</span>
                    <button className="logout-button">Cerrar Sesión🔓</button>
                </div>
            </div>
            <h2 style={{ marginTop: '2rem' }}>Historial de Reservas</h2>

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
                <td>{r.vencido ? 'VENCIDO' : 'Activo'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="floating-button">J</div>
    </div>
  );
}

export default HistorialReservas;
