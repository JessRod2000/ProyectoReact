import './App.css';
import rey_sisebuto from './images/rey_sisebuto.png';
import rey_leogivildo from './images/rey_leogivildo.png';
import rey_atanagildo from './images/rey_atanagildo.png';
import incognito from './images/rey_incognito.png';
import CajaRey from './CajaRey';
import { useState } from 'react';

function App() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69
    }
  ]
  const [total, setTotal] = useState(0);
  /*
  let nombres = ['Sisebuto','Leogivildo','Atanagildo'];

  const cambiarfoto = (e)=>{
    if(e.target.src.includes('incognito')){
      e.target.style.visibility="hidden";
    }else{
      e.target.src=incognito;
    }
    e.target.parentNode.style.backgroundColor='initial';
    e.target.parentNode.style.border='none';
  }
  
  const cambiarLetra =(e)=>{
    if(e.target.innerHTML.includes('Visto')){
      e.target.innerHTML='';
    }else{
      e.target.innerHTML='Visto';
    }
  }*/
  return (
    <>
    <h2>Total: {total} $</h2>
    <div className='cajaCentral'>
      <CajaRey rey={reyes[0]} setTotal={setTotal}/>
      <CajaRey rey={reyes[1]} setTotal={setTotal}/>
      <CajaRey rey={reyes[2]} setTotal={setTotal}/>
      <CajaRey rey={reyes[3]} setTotal={setTotal}/>      
      <CajaRey rey={reyes[4]} setTotal={setTotal}/>
      <CajaRey rey={reyes[5]} setTotal={setTotal}/>
    </div>
    
      {/*
      <div className='caja'>
        <img onClick={cambiarfoto} src={rey_sisebuto} alt=''/>
        <div onClick={cambiarLetra} className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img onClick={cambiarfoto} src={rey_leogivildo} alt=''/> 
        <div onClick={cambiarLetra} className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja'>
        <img onClick={cambiarfoto} src={rey_atanagildo} alt=''/>
        <div onClick={cambiarLetra} className='nombre'>{nombres[2]}</div>
      </div>
     */}
     </>
  );
}

export default App;
