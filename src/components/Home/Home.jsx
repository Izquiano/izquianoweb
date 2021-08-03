import React from "react";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Home.scss";

const Home = () => {
  const heigth = window.innerHeight - 44;

  return (
    <>
      <Menu />
      <div className='home-container' style={{ minHeight: heigth }}>
        <div className='central'>
          <Link to='/curriculum'>
            <div className='item'>
              <div className='icon'>
                <img src='./images/icons/icon_curriculum.svg' alt='' />
              </div>
              <div className='text'>Curriculum</div>
            </div>
          </Link>
          <Link to='/proyectos'>
            <div className='item proyectos'>
              <div className='icon'>
                <img src='./images/icons/icon_codigo.svg' alt='' />
              </div>
              Proyectos
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
