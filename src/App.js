import './App.css';
import rey_sisebuto from './images/rey_sisebuto.png';
import rey_leogivildo from './images/rey_leogivildo.png';
import rey_atanagildo from './images/rey_atanagildo.png';
import incognito from './images/rey_incognito.png'

function App() {
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
  }
  return (
    <div className='contenedor'>
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
    </div>
  );
}

export default App;
