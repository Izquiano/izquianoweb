import React from 'react'
import './Menu.scss'
import { useHistory, Link } from "react-router-dom";

const Menu = () => {

  const handleClick = () => {
    const menu = document.querySelector('.menu-items-container')
    menu.classList.contains('hide') ? menu.classList.remove('hide') :menu.classList.add('hide') 
  }

  const history = useHistory();
  return (
    <div className="menu-container">
      <div className="central">
        <div className="left">
          <img src="./images/icons/icon_back.svg" alt="" onClick={ () => history.goBack()}/>
        <Link to="/home" >
        Izquiano.es
        </Link>
       
        </div>
        <div className="right">

        <div className="menu-icon">
          <img src="./images/icons/icon_menu.svg" alt="" onClick={ handleClick }/>
        </div>
        </div>
      </div>
      <div className="menu-items-container hide">
        <div className="item">
          Proyectos
        </div>
        <div className="item">
          Currículum
        </div>

      </div>
      
    </div>
  )
}

export default Menu
                                                                 