
import {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import ListarReservas from './components/ListarReservas';

function App() {

  //RESERVAS EN LOCALSTORAGE
   let reservasIniciales = JSON.parse(localStorage.getItem('reservas'))
   if(!reservasIniciales){
     reservasIniciales = []
   }
 
  //ARRAY DE RESERVAS
  const [reservas, setReservas] = useState(reservasIniciales);
 

  //USE EFFECT PARA REALIZAR OPERACIONES CUANDO CAMBIA EL STATE
  //FUNCIONA COMO EL DOMCONTENTLOADED EN JAVASCRIPT
  useEffect(() => {
    if(reservasIniciales){
      localStorage.setItem('reservas', JSON.stringify(reservas))
    }
    
  }, [reservas, reservasIniciales]) //DEBES TERMINAR CON EL ARRAY VACIO, PARA QUE SOLO SE ACTUALICE UNA VEZ.  SE VA A EJECUTAR A MEDIDA QUE HAYA DEPENDENCIAS DENTRO DEL ARRAY []

  //TOMAR LAS RESERVAS Y AÑADIR LA NUEVA

  const crearReserva = (reserva) => {
        setReservas([
          ...reservas,
          reserva
        ])
  }

  //FUNCION PARA ELIMINAR RESERVAS POR SU ID.
  //REALIZAMOS UN FILTER SOBRE EL ARREGLO DE RESERVAS QUE TENEMOS 
  const eliminarReserva = id => {
    const listadoReservas = reservas.filter(reserva => reserva.id !== id)
    setReservas(listadoReservas)
    console.log(id)
  }
  
  //CREAMOS UN CONDICIONAL TERNARIO PARA EL MENSAJE
  const mensaje = reservas.length === 0 ? 'NO HAY RESERVAS PENDIENTES' : ''
  

  return (
    
    <Fragment>
      <h1 className='card text-center bg-info mt-3'>ADMINISTRADOR DE RESERVAS</h1>
      <div className='container'>
        <div className='row'>
          <div className='col'>              
              <Formulario crearReserva={crearReserva}/>
          </div>

          <div className='col'>

            <h2 className='card bg-warning text-center'>RESERVAS CONFIRMADAS</h2>
              <h3 className="text-center m-5 bg-danger">{mensaje}</h3>
              {reservas.map(reserva => (
                <ListarReservas 
                  key={reserva.id}
                  reserva = {reserva}
                  eliminarReserva = {eliminarReserva}
                />
                  
              ))}
          </div>
        </div>
      </div>

    </Fragment>
    
   
  );
}

export default App;
