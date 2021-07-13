import { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Proptypes from 'prop-types';

const Formulario = ({crearReserva}) => {


    //  CREAMOS EL STATE EN EL FORMULARIO
    const [reserva, setReserva] = useState({
        cliente: '',
        telefonoCliente: '',
        mail: '',
        fechareserva: '',
    })

    //FUNCION QUE SE EJECUTA CADA VEZ QUE SE ESRIBE EN UN INPUT
    const handleChange = (e) => {       
        setReserva({
            ...reserva, //PASAR LO QUE YA ESTÁ EN EL FORMULARIO
            [e.target.name] : e.target.value // ARRAY DESTRUCTURING
        })
        //console.log(e.target.value)
    }

//Extrer Valores
    const {cliente, telefonoCliente, mail, fechareserva} = reserva


    const [error, setError] = useState(false)
    //AL HACER EL SUBMIT DEL FORMULARIO PARA ENVIAR OCURRE TODO ESTO....

    const submitCita = e => {
        e.preventDefault();
        //console.log(cliente)
    
        //VALIDAR FORMULARIO
            for(const campo in reserva){               
                if(reserva[campo].trim() === ''){
                    setError(true)                    
                    return;
                }                
            }
            setError(false)  

        // ASIGNAR UN ID
        reserva.id = uuidv4()  

        //CREAR LA RESERVA
            crearReserva(reserva)

        //RESETEAR EL FORMULARIO
        setReserva({
          
            cliente: '',
            telefonoCliente: '',
            mail: '',
            fechareserva: '',
        }
        )
    
    }




  return (
    <Fragment>
      <h2 className='card text-center bg-info'>Crear Reserva</h2>

      {error ? <h3 className='alert alert-warning'>TODOS LOS CAMPOS SON OBLIGATORIOS</h3> :
      null}
     <div className='card m-3 bg-warning'>
     <form
        onSubmit={submitCita}
      >
        <div className="m-3">
          <label htmlFor="NombreCliente" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            name="cliente"
            id="NombreCliente"
            className="form-control "
            placeholder="Nombre Reserva"
            onChange={handleChange} // NECESITAMOS ONCHANGE PARA IR CAMBIANDO EL ESTADO DE LOS CAMPOS DEL FORM
            value={cliente} //RECOJE EL VALOR DEL FORMULARIO
          />
        </div>
        <div className="m-3">
          <label htmlFor="TelefonoCliente" className="form-label">
            Telefono Cliente
          </label>
          <input
            type="tel"
            name="telefonoCliente"
            id="TelefonoCliente"
            className="form-control"
            placeholder="Telefono Cliente"
            onChange={handleChange}
            value={telefonoCliente}
          />
        </div>
        <div className="m-3">
          <label htmlFor="CorreoCliente" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="mail"
            name="mail"
            id="CorreoCliente"
            className="form-control"
            placeholder="@ Cliente"
            onChange={handleChange}
            value={mail}
          />
        </div>
        <div className="m-3">
          <label htmlFor="FechaReserva" className="form-label">
            Fecha Reserva
          </label>
          <input
            type="date"
            name="fechareserva"
            id="FechaReserva"
            className="form-control"
            onChange={handleChange}
            value={fechareserva}
          />
        </div>
        <div className='m-3'>
          <button type="submit" className="btn btn-primary mb-3">
            Confirmar Reserva
          </button>
        </div>
      </form>
       </div> 
      
    </Fragment>
  );
};

Formulario.propTypes = {
  crearReserva: Proptypes.func.isRequired

}

export default Formulario;
