import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="central">
        <div className="img-container">
          <img src="./images/profile-photo.jpg" alt="" />
        </div>

        <div className="text">
          <h1>Daniel Fernández Izquiano</h1>
          <p>
            <b>Diseñador y Full Stack Web Developer</b> {"=>"} Javascript, ES6,
            MongoDB, Express, React, Node.js, HTML5, CSS3 | Photoshop,
            Illustrator, InDesign, Adobe Xd
          </p>
          
          
            <span>
              Enamorado de la programación y apasionado de la tecnología.
              Especialista en transformar ideas en marcas, sitios web y campañas
              publicitarias para redes sociales y soportes publicitarios.
            </span>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
