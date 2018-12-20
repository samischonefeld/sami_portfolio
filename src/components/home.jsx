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
            <div>
              <h2 className = "card_header">
                <Link to = "/webdev" style={{ color: '#87596e' }}> ART </Link>
              </h2>
            </div>
            <img
            className = "card_image"
            src = "https://i.imgur.com/pgrCxES.jpg"
            alt = "art"
            />
          </div>

          <div className = "card">
            <div>
              <h2 className = "card_header">
                <Link to = "/webdev" style={{ color: '#87596e' }}> WEB DEV </Link>
              </h2>
            </div>
            <img
            className = "card_image"
            src = "https://i.imgur.com/YPGOEq4.jpg"
            alt = "webdev"
            />
          </div>

          <div className = "card">
            <div>
              <h2 className = "card_header">
                <Link to = "/webdev" style={{ color: '#87596e' }}> ABOUT </Link>
              </h2>
            </div>
            <img
            className = "card_image"
            src = "https://i.imgur.com/PKkLMzv.jpg"
            alt = "about"
            />
          </div>

        </div>
        <FooterHome />
      </div>
    )
  }
}

export default Home;
