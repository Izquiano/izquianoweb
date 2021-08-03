import React from "react";
import "./Proyectos.scss";
import Menu from "../Menu/Menu";
import { proyectos } from "../Curriculum/data";

function Proyectos() {
  const heigth = window.innerHeight - 44;
  return (
    <>
      <Menu />
      <div className='proyectos-container' style={{ minHeight: heigth }}>
        <div className='central'>
          {proyectos.map((el) => (
            <div className='item' key={el.title}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
              <a href={el.link} target='_blank' rel='noreferrer'>
                Ver proyecto
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Proyectos;
