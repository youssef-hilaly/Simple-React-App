import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        {/* footer content first section */}
        <div className="footer-content bg-main">
            <div className="row">

                <div className="col-md-4">
                    <section>
                        <h2>LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </section>
                </div>

                <div className="col-md-4">
                    <section>
                        <h2>AROUND THE WEB</h2>
                        <div className="social">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </section>
                </div>

                <div className="col-md-4">
                    <section>
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Youssef Hilaly.</p>
                    </section>
                </div>
            </div>
        </div>
        {/* footer copy right  second section*/}
        <div className="copy-right text-center text-white p-4">
                <p className='m-0'>Copyright © Your Website 2021</p>
            </div>
        
      </footer>
    )
  }
}
