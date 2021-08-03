import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import "./Splash.scss";

const Splash = () => {
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to='/home' />;
  }
  const heigth = window.innerHeight;

  return (
    <div className='splash-container' style={{ minHeight: heigth }}>
      <div className='central'>
        <h1>izquiano.es</h1>
        <h2>Daniel Fernández Izquiano</h2>
        <h3>Bienvenidos a mi web</h3>

        <button onClick={handleClick}>Siguiente</button>
      </div>
    </div>
  );
};

export default Splash;
