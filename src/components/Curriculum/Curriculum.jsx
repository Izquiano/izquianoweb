import React from "react";
import Menu from "../Menu/Menu";
import Experiencia from "./Experiencia/Experiencia";
import Formacion from "./Formacion/Formacion";
import Habilidades from "./Habilidades/Habilidades";
import Header from "./Header/Header";
import Idiomas from "./Idiomas/Idiomas";
import Intereses from "./Intereses/Intereses";
import PersonalData from "./PersonalData/PersonalData";

const Curriculum = (props) => {
  return (
    <div className='curriculum-container'>
      <Menu />
      <Header />
      <PersonalData />
      <Experiencia />
      <Formacion />
      <Habilidades />
      <Idiomas />
      <Intereses />
    </div>
  );
};

export default Curriculum;
