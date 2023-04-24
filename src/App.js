import './App.css';
import rey_sisebuto from './images/rey_sisebuto.png';
import rey_leogivildo from './images/rey_leogivildo.png';
import rey_atanagildo from './images/rey_atanagildo.png';

function App() {
  let nombres = ['Sisebuto','Leogivildo','Atanagildo'];

  return (
    <div className='contenedor'>
      <div className='caja'>
        <img src={rey_sisebuto} alt=''/>
        <div className='nombre'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img src={rey_leogivildo} alt=''/> 
        <div className='nombre'>{nombres[1]}</div>
      </div>
      <div className='caja'>
        <img src={rey_atanagildo} alt=''/>
        <div className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
