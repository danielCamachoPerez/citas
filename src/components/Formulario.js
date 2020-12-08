import React, { Fragment, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const Formulario=({crearCita})=>{
    //crear Hook de Cita
    const [cita, actualizarCita]=useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    })
    const [error,actualizarError]=useState(false)
    //funcion que se ejecuta cada que el usuario escibe en un input
    const handleChange=e=>{
        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        })
    }
//estraer valores
const {mascota,propietario,fecha,hora,sintomas}=cita
//enviar formulario
const submitCita =e=>{
    e.preventDefault()
    //validar
    if(mascota.trim()===''||propietario.trim()===''||fecha.trim()===''||hora.trim()===''||sintomas.trim()===''){
        actualizarError(true)
        return
    }

    //eliminar mensaje previo, validacion-error
    actualizarError(false)

    //asignar un ID
    cita.id=uuidv4()
    //crear Cita
    crearCita(cita)
    //reiniciar el form
    actualizarCita({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    })
}
    return (
        <Fragment>
        <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input 
                    type="text" 
                    name="mascota" 
                    className="u-full-width" 
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                    type="text" 
                    name="propietario" 
                    className="u-full-width" 
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input 
                    type="date" 
                    name="fecha" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time" 
                    name="hora" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea 
                    name="sintomas" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                />
                <button 
                    type="submit"
                    className="u-full-width button-primary" 
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario