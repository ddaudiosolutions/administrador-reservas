import Proptypes from 'prop-types';

const ListarReservas = ({ reserva, eliminarReserva }) => {

  const eliminandoReserva = () => {
    eliminarReserva(reserva.id)
  }

  return (
    <div className="card mb-3 bg-success">
      <div className='card m-3'>
           <ul className="list-group list-group-flush">
            <li className="list-group-item"><span className="fw-bold">Nombre: </span> {reserva.cliente} </li>
            <li className="list-group-item"><span className="fw-bold">Teléfono: </span> {reserva.telefonoCliente}</li>
            <li className="list-group-item"><span className="fw-bold">@Correo: </span> {reserva.mail}</li>
            <li className="list-group-item"><span className="fw-bold">Fecha Entrada: </span> {reserva.fechareserva}</li>
          </ul>
          <button 
            className="btn btn-warning"

            onClick={eliminandoReserva}
            >Eliminar Reserva</button>
      </div>

    </div>
      
    
  );
};
ListarReservas.popTypes = {
  reserva: Proptypes.object.isRequired,
  eliminandoReserva: Proptypes.func.isRequired
}
export default ListarReservas;
