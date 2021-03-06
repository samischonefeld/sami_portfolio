import React from 'react';
import { Link } from 'react-router-dom';

function HeaderAbout() {
  return(
      <div>
      <nav>
        <div className = "nav_link"><Link to = "/" style={{ color: 'white' }}> HOME </Link></div>
        <div className = "nav_link"><Link to = "/webdev" style={{ color: 'white' }}> WEB DEV </Link></div>
        <div className = "nav_link"><Link to = "/art" style={{ color: 'white' }}> ART </Link></div>
      </nav>
      <img
        className = "hero1"
        src = "https://i.imgur.com/TBXw1b6.jpg"
        alt = "hero"
      />
    </div>
    )
}

export default HeaderAbout;
