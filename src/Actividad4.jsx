import React from 'react'

function Actividad4({reyes}) {
    const voto=(e)=>{
        e.target.innerHTML = ++e.target.innerHTML;
    }
  const comelones = reyes
  .filter(valor=> valor.vacasComidas > 10 && valor.reinado >10)
  .map(valor=>
    <div key={valor.nombre}>
        {valor.nombre}
        <div className='numero' onClick={voto}>0</div>
    </div>
    )
    return (
    <div>
      {comelones}
    </div>
  )
}

export default Actividad4
