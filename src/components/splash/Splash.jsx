import React, { useState } from "react";
import { Redirect } from "react-router-dom";


import "./Splash.scss";

const Splash = () => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
        setRedirect(true)
  };

  
if( redirect ){
  
 return <Redirect to="/home" />
}
  return (
    <div className="splash-container">
      <div className="central">
        <h1>Hola!</h1>
        <h3>Bienvenidos a mi web</h3>
        <p>
          Aquí os enseñaré mi trayectoria, mis trabajos y algunos proyectos en
          los que he trabajado tanto personal como profesionalmente.
        </p>

        <span>Pulsa en siguente para entrar</span>
        <button onClick={handleClick}>Siguiente</button>
      </div>
    </div>
  );
};

export default Splash;
