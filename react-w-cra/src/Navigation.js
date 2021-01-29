import React from 'react';
import './Navigation.css';
export const Navigation = () => {
  
  return(
  <nav id="nav-bar">
    <img style={{width: "5%"}} className="logo" src="/images/bird.png" alt="tweet logo"/>
    <span className="header">Tweeter</span>
    <button type="submit"><i className="far fa-edit"></i>Compose</button>
  </nav>
  )
}

