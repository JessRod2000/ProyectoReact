import React from "react";
//<Actividad1 key={valor.nombre} rey={valor}/>
function Rey({reyes}) {
    const url = 'https://www.html6.es/img/rey_';
    //const ruta = direccion+rey.nombre.toLowerCase()+'.png'
    const cajareyes = reyes.map((valor) => (
      <div className="caja" key={valor.nombre}>
        <div>
          <span className="nombre">{valor.nombre.toUpperCase()}</span> ha comido{" "}
          {valor.vacasComidas*365} en sus {valor.reinado} anios de reinado
        </div>
        <img src={url+valor.nombre.toLowerCase()+'.png'} alt="" />
      </div>
    ));
    //console.log(ruta);
    return <>
        {cajareyes}
    </>;
}

export default Rey;
