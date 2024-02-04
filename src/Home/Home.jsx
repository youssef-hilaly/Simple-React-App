import React, { Component } from 'react'
import homeImage from '../imgs/avataaars.svg'
import Star from '../Star/Star'

export default class Home extends Component {
  render() {
    return (
      <div className='home d-flex justify-content-center align-items-center bg-section vh-100'>
          <div className="home-content text-center text-white">
            {/* home img */}
            <div className="home-image w-65 mx-auto">
              <img src={homeImage} alt="" className='w-100'/>
            </div>
            {/* home header */}
            <h1 className='fw-bold mt-4 pt-3 fs-3rem'>START FRAMEWORK</h1>
            {/* star icon */}
            <Star/>
            {/* home paragraph */}
            <p className='fs-5'>Graphic Artist - Web Designer - Illustrator</p>
          </div>
      </div>
    )
  }
}
