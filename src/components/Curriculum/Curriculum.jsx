import React from "react";
import Experiencia from "./Experiencia/Experiencia";
import Header from "./Header/Header";
import PersonalData from "./PersonalData/PersonalData";

const Curriculum = (props) => {
  return (
    <div className="curriculum-container">
      <Header />
      <PersonalData />

      <Experiencia />
    </div>
  );
};

export default Curriculum;
