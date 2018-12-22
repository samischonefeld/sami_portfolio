import React from 'react';
import ContactForm from './contactform.jsx';
import HeaderAbout from './header_about.jsx';
import Footer from './footer.jsx';

function About() {
  return(
    <div>
    <HeaderAbout />
    <h1> ABOUT </h1>
    <section className = "intro">
      <div className = "intro_text intro_query">
        <h2 className = "intro_title"> HI, I'M SAMI! </h2>
        <p className = "paragraph">
          I’m a web developer whose previous experience as a marketer inspired me to build amazing websites that create real ROI.
          Synergizing marketing, project management, web development, and design I want to find my niche turning good ideas into amazing websites and apps.
        </p>
      </div>
      <img className = "profpic" src = "https://i.imgur.com/dFiOKuq.jpg" alt = "profpic"/>
    </section>
    <section className = "contact_wrapper">
      <div className = "links_container">
        <a className = "social_link" href = "https://github.com/samischonefeld">
          <div className = "link">
            <img className = "link_img" src = "https://i.imgur.com/BZ8FiA6.png" alt="link" />
            <p>GITHUB</p>
          </div>
        </a>
        <a className = "social_link" href = "https://www.linkedin.com/in/samischonefeld/">
          <div className = "link">
            <img className ="link_img" src = "https://i.imgur.com/OeOlxQl.png" alt="link"/>
            <p>LINKEDIN</p>
          </div>
        </a>
        <a className = "social_link" href = "https://www.facebook.com/sami.schonefeld">
          <div className = "link">
            <img className ="link_img" src = "https://i.imgur.com/XVbet5s.png" alt="link"/>
            <p>FACEBOOK</p>
          </div>
        </a>
        <a className = "social_link" href = "https://www.instagram.com/sami_pearl/">
          <div className = "link">
            <img className ="link_img" src = "https://i.imgur.com/Qy8JjS6.png" alt="link"/>
            <p>INSTAGRAM</p>
          </div>
        </a>
      </div>
      <div>
      <ContactForm />
      </div>
    </section>
    <Footer />
    </div>
    )
}

export default About;
