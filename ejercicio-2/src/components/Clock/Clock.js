import React, { useEffect, useState } from 'react'
import '../../styles/clock.scss';

const Clock = () => {
   const [form, setForm] = useState({fecha: new Date(), edad: 0, nombre: 'Martín', apellidos: 'San José'})

   useEffect(() => {
      const timerID = setInterval(
         () => tick(), 1000
      )
      return () => clearInterval(timerID)

   },[])

   const tick = () => {
      setForm(prevState => ({...prevState, fecha: new Date(), edad: prevState.edad + 1}))
   }

   return(
      <div>
         <h2>
         Hora Actual: <span className='time'>{form.fecha.toLocaleTimeString()}</span>
         </h2>
         <h3>{form.nombre} {form.apellidos}</h3>
         <h1>Edad: <span className='age'>{form.edad}</span></h1>
      </div>
   )
}

export default Clock;