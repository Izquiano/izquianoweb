import React from "react";
import "./PersonalData.scss";

const PersonalData = () => {
  return (
    <div className="personal-data-container">
      <div className="central">
        <div className="col">
          <div className="item">
            <img className="icon" src="/images/icons/icon_mail.svg" alt="" />
            <a href="mailto:daniel@izquiano.es?Subject=Hemos visto tu currículum">
            daniel@izquiano.es
            </a>
          </div>
          <div className="item">
            <img className="icon" src="./images/icons/icon_location.svg" alt="" />
            <a
              href="https://maps.google.com/?ll=36.53545,-6.29315"
              target="_blank" rel="noreferrer"
            >
              Cádiz, España
            </a>
          </div>
          <div className="item">
            <img className="icon" src="./images/icons/icon_github.svg" alt="" />
            <a href="https://github.com/Izquiano"
            target="_blank" rel="noreferrer"
            >github.com/Izquiano</a>
          </div>
        </div>

        <div className="col">
          <div className="item">
            <img className="icon" src="./images/icons/icon_mobile.svg" alt="" />
            <a href="tel:+34658908662">+34 658 908 662</a>
          </div>
          <div className="item">
            <img className="icon" src="./images/icons/icon_linkedin.svg" alt="" />
            <a href="https://www.linkedin.com/in/daniel-fernandez-izquiano/"
            target="_blank" rel="noreferrer"
            >
              linkedin.com/in/daniel-fernandez-izquiano
            </a>
          </div>
          <div className="item">
            <img className="icon" src="./images/icons/icon_instagram.svg" alt="" />
            <a href="https://www.instagram.com/izquianoillustration/"
            target="_blank" rel="noreferrer"
            >
              www.instagram.com/izquianoillustration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
