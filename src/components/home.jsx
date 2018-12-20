import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from './header_home.jsx';
import FooterHome from './footer_home.jsx';

class Home extends Component  {
  render(){
    return(
      <div>
      <HeaderHome />
        <h1> SAMI SCHONEFELD </h1>
        <div className = "card_container">

          <div className = "card">
          <Link to = "/art">
            <div>
              <h2 className = "card_header"> ART </h2>
            </div>
            <img
            className = "card_image"
            src = "https://i.imgur.com/YPGOEq4.jpg"
            alt = "art"
            />
          </Link>
          </div>

          <div className = "card">
          <Link to = "/webdev">
            <div>
              <h2 className = "card_header"> WEB DEV </h2>
            </div>
            <img
            className = "card_image"
            src = "https://i.imgur.com/pgrCxES.jpg"
            alt = "art"
            />
          </Link>
          </div>

          <div className = "card">
          <Link to = "/about">
            <div>
              <h2 className = "card_header"> ABOUT </h2>
            </div>
            <img
            className = "card_image"
            src = "https://i.imgur.com/PKkLMzv.jpg"
            alt = "art"
            />
          </Link>
          </div>

        </div>
        <FooterHome />
      </div>
    )
  }
}

export default Home;
