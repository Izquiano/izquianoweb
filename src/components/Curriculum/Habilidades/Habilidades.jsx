import React from "react";
import './Habilidades.scss'
import { habilidadesProgramacion, habilidadesDiseño } from "../data";

const Habilidades = () => {
  return (
    <div className="habilidades-container">
      <div className="central">
        <h2>Habilidades</h2>
        
        {
          habilidadesProgramacion.map(el => (
          <span className="item programacion" key={el}>{el}</span>
          ))
        }
         {
          habilidadesDiseño.map(el => (
          <span className="item diseño" key={el}>{el}</span>
          ))
        }
      </div>
    </div>
  );
};

export default Habilidades;
