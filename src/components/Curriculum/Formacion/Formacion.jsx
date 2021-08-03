import React from "react";
import "./Formacion.scss";
import { formacion } from "../data";

const Formacion = () => {
  const handleClick = (e) => {
    const element = e.target.nextSibling;
    element.classList.contains("show")
      ? element.classList.remove("show")
      : element.classList.add("show");

    e.target.attributes.src.nodeValue === "./images/icons/icon_toggle.svg"
      ? (e.target.src = "./images/icons/icon_toggle_up.svg")
      : (e.target.src = "./images/icons/icon_toggle.svg");
  };

  return (
    <div className='formacion-container'>
      <div className='central'>
        <h2>Formación</h2>

        {formacion.map((el) => (
          <div className='item' key={el.company}>
            <div className='text'>
              <h3>{el.company}</h3>
              <h4>{el.date}</h4>
              <div>
                <span>{el.location}</span>
              </div>
            </div>

            {el.materias ? (
              <>
                <img
                  className='icon'
                  onClick={handleClick}
                  src='./images/icons/icon_toggle.svg'
                  alt=''
                />
                <div className='description'>
                  <span>Desempeño</span>

                  <p>
                    <b>Materias: </b>
                    {el.materias}.
                  </p>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formacion;
