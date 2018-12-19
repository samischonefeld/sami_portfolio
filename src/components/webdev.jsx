import React from 'react';
import HeaderWebDev from './header_webdev.jsx';
import Footer from './footer.jsx';

function WebDev() {
  return (
    <div>
    <HeaderWebDev />
   <h1> WEB DEVELOPMENT </h1>

   <section className = "mouseattack">
    <div className = "image_container">
      <img className = "mouse_image"
        src = "https://i.imgur.com/Yi1B45j.png"
        alt = "mouseattack"
        />
    </div>
    <div className = "description">
      <h2 className = "header"> AIRBNB MOUSE ATTACK </h2>
      <p className = "paragraph">Based on a very real personal experience with AirBnb and what became known as the Great Mouse Fiasco of 2018.
      The goal of the game is to take as many pictures of the mice that have invaded your AirBnb before you check out.
      This is a single page app developed using Javascript, HTML, and CSS.</p>
      <a className = "play" href = "http://abnb-mouse-attack-1.surge.sh/">PLAY HERE!</a>
    </div>
  </section>

   <section className = "sketch">
    <div className = "description2">
      <h2 h2 className = "header"> SKETCH WIREFRAMES </h2>
      <p className = "paragraph left_p">Take a look at the process that went behind building this website.
      Using Sketch I developed personalized wireframes to fit my needs. Having past experience
      wireframing in previous jobs, I feel that it directly informs my approach to concieving and writing code.
      </p>
      <a className = "play" href = "https://imgur.com/a/0lTkOmy"> SEE MORE </a>
    </div>
    <div className = "image_container">
      <img
      className = "sketchimage"
       src = "https://i.imgur.com/vDEelYL.png"
       alt = "sketchwf"
      />
    </div>
  </section>

  <section className = "comingsoon">
    <div className = "image_container">
      <img
      className = "comingsoonimage"
      src = "https://i.imgur.com/YnRRv2n.jpg"
      alt = "comingsoon"
      />
    </div>
    <div className = "description">
      <h2 h2 className = "header"> COMING SOON </h2>
      <p className = "paragraph">Please stay tuned, good things are coming!
      Feel free to check out work in progress on GitHub.
      </p>
      <a className = "play" href = "https://github.com/samischonefeld"> MY GITHUB </a>
    </div>
  </section>

    <Footer />
    </div>
    )
}

export default WebDev;
