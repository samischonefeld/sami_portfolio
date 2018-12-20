import React from 'react';
import { Link } from 'react-router-dom';

function Footer(){
  return(
    <footer className = "footer_all">
      <div>
        <a className = "footer_links" href = "https://github.com/samischonefeld">
          <img className ="link_img" src = "https://i.imgur.com/z5JBdlx.png" alt="link"/>
        </a>
        <a className = "footer_links" href = "https://www.linkedin.com/in/samischonefeld/">
          <img className = "link_img" src = "https://i.imgur.com/o22Kl9i.png" alt="link"/>
        </a>
        <a className = "footer_links" href = "https://www.instagram.com/sami_pearl/">
          <img className = "link_img" src = "https://i.imgur.com/Kd1l7Ow.png" alt="link"/>
        </a>
      </div>
      <div className = "home_link">
        <Link to = "/" style = {{ color: 'white' }}> HOME </Link>
      </div>
    </footer>
    )
}

export default Footer;
