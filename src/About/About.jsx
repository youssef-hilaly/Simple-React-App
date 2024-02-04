import React, { Component } from 'react'
import Star from '../Star/Star'

export default class About extends Component {
  render() {
    return (
      <div id='about' className='d-flex justify-content-center align-items-center min-vh-100 bg-section'>
        <div className="content text-center text-white">
          {/* about header */}
          <div className="about-header mx-auto">
            <h1 className='fw-bold mt-4 pt-3'>ABOUT COMPONENT</h1>
            {/* star icon */}
            <Star />
          </div>
          {/* about content */}
          <div className="about-content">
            <div className="container">
              <div className="row">
                {/* first p */}
                <div className="col-md-6">
                  <div className="text-start fs-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                </div>
                {/* second p */}
                <div className="col-md-6">
                  <div className="text-start fs-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    )
  }
}
