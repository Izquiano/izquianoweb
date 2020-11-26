import React from "react";
import "./Experiencia.scss";
import { experiencia } from "../data";

const Experiencia = () => {
  const handleClick = (e) => {
    const element = e.target.nextSibling;
    element.classList.contains("show")
      ? element.classList.remove("show")
      : element.classList.add("show");

    e.target.attributes.src.nodeValue === "icons/icon_toggle.png"
      ? (e.target.src = "icons/icon_toggle_up.png")
      : (e.target.src = "icons/icon_toggle.png");
  };

  return (
    <div className="experiencia-container">
      <div className="central">
        <h2>Experiencia</h2>

        {experiencia.map((el) => (
          <div className="item" key={el.title}>
            <div className="text">
              <h3>{el.title}</h3>
              <h4>{el.date}</h4>
              <div>
                <span>{el.location}</span>
              </div>
            </div>
            <img
              className="icon"
              onClick={handleClick}
              src="icons/icon_toggle.png"
              alt=""
            />
            <div className="description">
              {/* <span>Desempeño</span> */}
              {el.ocupation.map((ocupation) => (
                <p key={ocupation.cargo}>
                  <b>{ocupation.cargo}.</b>
                  {ocupation.description}.
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
