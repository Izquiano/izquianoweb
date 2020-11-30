import React from "react";
import { Link } from 'react-router-dom'
import Menu from "../Menu/Menu";
import "./Home.scss";
import Proyectos from "./Proyectos/Proyectos";

const Home = () => {
  return (
    <>
      <Menu />
      <div className="home-container">
        <div className="central">
          <div className="item">
            <div className="icon">
              <img src="./images/icons/icon_codigo.svg" alt="" />
            </div>
            <Proyectos />
          </div>
          <div className="item">
            <div className="icon">
              <img src="./images/icons/icon_curriculum.svg" alt="" />
            </div>
            <div className="text">
              <Link to="/curriculum">
              Curriculum
              </Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
