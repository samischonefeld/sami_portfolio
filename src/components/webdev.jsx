import React from 'react';
import HeaderWebDev from './header_webdev.jsx';
import Footer from './footer.jsx';

function WebDev() {
  return (
    <div>
    <HeaderWebDev />
   <h1> WEB DEVELOPMENT </h1>

   <section>
    <div>
      <img
        src = "https://i.imgur.com/Yi1B45j.png"
        alt = "mouseattack"
        />
    </div>
    <div>
      <h2> AIRBNB MOUSE ATTACK </h2>
      <p>Based on a very real personal experience with AirBnb and what became known as the Great Mouse Fiasco of 2018.
      The goal of the game is to take as many pictures of the mice that have invaded your AirBnb before you check out.
      This is a single page app developed using Javascript, HTML, and CSS.</p>
      <a href = "http://abnb-mouse-attack-1.surge.sh/">PLAY HERE!</a>
    </div>
  </section>

   <section>
    <div>
      <h2> SKETCH WIREFRAMES </h2>
      <p>Take a look at the process that went behind building this website.
      Using Sketch I developed personalized wireframes to fit my needs. Having past experience
      wireframing in previous jobs, I feel that it directly informs my approach to concieving and writing code.
      </p>
      <a href = "https://imgur.com/a/0lTkOmy"> SEE MORE </a>
    </div>
    <div>
      <img
       src = "https://i.imgur.com/vDEelYL.png"
       alt = "sketchwf"
      />
    </div>
  </section>

  <section>
    <div>
      <img
      src = "https://i.imgur.com/YnRRv2n.jpg"
      alt = "comingsoon"
      />
    </div>
    <div>
      <h2> COMING SOON </h2>
      <p>Please stay tuned, good things are coming!
      Feel free to check out work in progress on GitHub.
      </p>
      <a href = "https://github.com/samischonefeld"> MY GITHUB </a>
    </div>
  </section>

    <Footer />
    </div>
    )
}

export default WebDev;
