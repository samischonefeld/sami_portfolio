import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component  {
  render(){
    return(
      <div>
        <h1> SAMI SCHONEFELD </h1>
        <div className = "card_container">

          <div className = "card">
            <div>
              <h2 className = "card_header">
                <Link to = "/webdev"> ART </Link>
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
                <Link to = "/webdev"> WEB DEV </Link>
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
                <Link to = "/webdev"> ABOUT </Link>
              </h2>
            </div>
            <img
            className = "card_image"
            src = "https://i.imgur.com/PKkLMzv.jpg"
            alt = "about"
            />
          </div>

        </div>
      </div>
    )
  }
}

export default Home;
