import React from 'react'

function Actividad3({reyes}) {
    const elegido = reyes
    .find(valor=>valor.nombre[0] === 'e' || valor.nombre[0] === 'E');
  return (
    <div>
      {elegido===undefined ? 'No se ha encontrado'
      : elegido.nombre}
    </div>
  )
}

export default Actividad3
