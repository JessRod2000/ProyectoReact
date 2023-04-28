import React from 'react'

function Actividad2({reyes}) {
    const elegidos = reyes
    .filter(valor => !valor.nombre.includes('g'))
    .map(valor=>
        <div key={valor.nombre}>
            {valor.nombre}
            <button onClick={(e)=>e.target.parentNode.remove()}>Borrar</button>
        </div>
        )
  return (
    <div>
      {elegidos}
    </div>
  )
}

export default Actividad2
