import React from "react";
import "./Experiencia.scss";
import { experiencia } from "../data";

const Experiencia = () => {
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
    <div className='experiencia-container'>
      <div className='central'>
        <h2>Experiencia</h2>

        {experiencia.map((el) => (
          <div className='item' key={el.title}>
            <div className='text'>
              <h3>{el.title}</h3>
              <h4>{el.date}</h4>
              <div>
                <span>
                  <b>{el.company}</b> · {el.location}
                </span>
              </div>
            </div>
            <img
              className='icon'
              onClick={handleClick}
              src='./images/icons/icon_toggle.svg'
              alt=''
            />
            <div className='description'>
              {/* <span>Desempeño</span> */}
              {el.ocupation.map((ocupation) => (
                <p key={ocupation.cargo}>
                  <b>{ocupation.cargo}.</b> {ocupation.description}.
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* {JSON.stringify(experiencia)} */}
    </div>
  );
};

export default Experiencia;
