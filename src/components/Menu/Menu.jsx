import React from "react";
import "./Menu.scss";
import { useHistory, Link } from "react-router-dom";

const Menu = () => {
  const handleClick = () => {
    const menu = document.querySelector(".menu-items-container");
    menu.classList.contains("hide")
      ? menu.classList.remove("hide")
      : menu.classList.add("hide");
  };

  const history = useHistory();
  return (
    <div className='menu-container'>
      <div className='central'>
        <div className='left'>
          <img
            src='./images/icons/icon_back.svg'
            alt=''
            onClick={() => history.goBack()}
          />
        </div>
        <Link to='/home'>Izquiano.es</Link>
        <div className='right'>
          <div className='menu-icon'>
            <img
              src='./images/icons/icon_menu.svg'
              alt=''
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className='menu-items-container hide'>
        <Link to='/curriculum' className='item'>
          Curriculum
        </Link>
        <Link to='/proyectos' className='item'>
          Proyectos
        </Link>
      </div>
    </div>
  );
};

export default Menu;
