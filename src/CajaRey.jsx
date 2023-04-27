import React from 'react';
import './MiCss.css'

function CajaRey({rey,setTotal}) {
    const ruta = 'https://www.html6.es/img/rey_';
    const imagen = `${ruta}${rey.nombre.toLowerCase()}.png`
    const sumarPrecio=(elemento)=>{
        setTotal((e)=>e+rey.precio);
        elemento.target.parentNode.style.display="none";
    }
  return (
    <>
    <div className='cajaRey' style={{backgroundColor:rey.color}}>
        <h1>{rey.nombre}</h1>
        <img src={imagen} alt="foto atana" />
        <span>Precio: {rey.precio} $ </span>
        <button onClick={sumarPrecio}>Comprar</button>
    </div>
    </>
  )
}
/*
CajaRey.defaultProps={
    nombre:'Atanagildo',
    imagen:'https://www.html6.es/img/rey_atanagildo.png',
    precio:58
}*/
export default CajaRey
