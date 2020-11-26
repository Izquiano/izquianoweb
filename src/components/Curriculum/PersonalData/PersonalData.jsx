import React from "react";
import "./PersonalData.scss";

const PersonalData = () => {
  return (
    <div className="personal-data-container">
      <div className="center">
        <div className="col">
          <div className="item">
            <img className="icon" src="./icons/icon_mail.png" alt="" />
            <a href="mailto:izquiano@hotmail.com?Subject=Hemos visto tu currículum">
              izquiano@hotmail.com
            </a>
          </div>
          <div className="item">
            <img className="icon" src="./icons/icon_location.png" alt="" />
            <a
              href="https://maps.google.com/?ll=36.53545,-6.29315"
              target="_blank"
            >
              Cádiz, España
            </a>
          </div>
          <div className="item">
            <img className="icon" src="./icons/icon_github.png" alt="" />
            <a href="https://github.com/Izquiano">github.com/Izquiano</a>
          </div>
        </div>

        <div className="col">
          <div className="item">
            <img className="icon" src="./icons/icon_mobile.png" alt="" />
            <a href="tel:+34658908662">+34 658 908 662</a>
          </div>
          <div className="item">
            <img className="icon" src="./icons/icon_linkedin.png" alt="" />
            <a href="https://www.linkedin.com/in/daniel-fernandez-izquiano/">
              linkedin.com/in/daniel-fernandez-izquiano
            </a>
          </div>
          <div className="item">
            <img className="icon" src="./icons/icon_instagram.png" alt="" />
            <a href="https://www.instagram.com/izquianoillustration/">
              www.instagram.com/izquianoillustration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
