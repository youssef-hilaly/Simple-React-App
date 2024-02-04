import React, { Component } from 'react'
import './Star.css'
export default class Star extends Component {
  state = {
    color: 'orange'
  }
  render() {
    let {color} = this.props;
    return (

      <div className="star-icon position-relative my-3">
        {/* lines before and after the star */}
        <div className="line" style={{"--my-color-var": color}}></div>
        {/* star icon */}
        <i className='fa-solid fa-star fs-5' style={{"--my-color-var": color}}></i>
      </div>
    )
  }
}
