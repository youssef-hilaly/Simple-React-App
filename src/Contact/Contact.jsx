import React, { Component } from 'react'
import Star from '../Star/Star'
import './Contact.css'

export default class Contact extends Component {
  state = {
    starColor: '#2c3e50'
  }

  componentDidMount() {
    let button = document.querySelector('form button');
    // button event reset form and disable default behavior
    button.addEventListener('click', (e) => {
      e.preventDefault();
      let inputs = document.querySelectorAll('form input');
      inputs.forEach(input => {
        input.value = '';
      });
    });
  }
  render() {
    return (<>

      <div id="portfolio" className='vh-100'>
        <div className="container">
          {/* contact header*/}
          <div className="portfolio-header mx-auto text-center">
            <h1 className='fw-bolder pt-3'>CONTACT SECTION</h1>
            {/* star icon */}
            <Star color={this.state.starColor} />
          </div>

          {/* contact form */}
          <form className='py-5'>
            {/* name */}
            <div className="input-container">
              <input type="text" className='' placeholder='userName' id='username' />
              <label htmlFor="username">userName:</label>
            </div>
            {/* age */}
            <div className="input-container">
              <input type="text" className='' placeholder='userAge' />
              <label htmlFor="username">userAge:</label>
            </div>
            {/* email */}
            <div className="input-container">
              <input type="email" className='' placeholder='userEmail' />
              <label htmlFor="username">userEmail:</label>
            </div>
            {/* password */}
            <div className="input-container">
              <input type="password" className='' placeholder='userPassword' />
              <label htmlFor="username">userPassword:</label>
            </div>
            {/* submit button */}
            <button className='btn text-white bg-section fs-5'>send Message</button>
          </form>
        </div>
      </div>
    </>)
  }
}
