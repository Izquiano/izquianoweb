import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import "./Splash.css";

const Splash = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(1);
    }, 5000);
  }, []);


  return (
    <div className="splash-container">
      <h1>Splash</h1>
    </div>
  );
};

export default Splash;
