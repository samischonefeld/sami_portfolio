import React, { Component } from 'react';

class ContactForm extends Component{
  render(){
    return(
        <form
        action = "https://formspree.io/samischonefeld@gmail.com"
        method = "POST"
        >
          <h2 className = "form_title"> GET IN TOUCH </h2>
          <div className = "forminput">
            <label>NAME</label>
            <input
              name = "name"
              type = "text"
              placeholder = "sporty spice">
            </input>
          </div>
          <div className = "forminput">
            <label>EMAIL</label>
            <input
              name = "email"
              type = "text"
              placeholder = "spicegirls123@sportyspice.com">
            </input>
          </div>
          <div className = "forminput">
            <label>MESSAGE</label>
            <input
              className = "messageinput"
              name = "message"
              type = "text"
              placeholder = "tell me something good...">
            </input>
          </div>
          <div className = "button">
            <button
            type = "submit"
            value = "send">
            SUBMIT
            </button>
          </div>
        </form>
    )
  }
}

export default ContactForm;
