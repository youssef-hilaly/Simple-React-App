import React, { Component } from 'react'
import './Portfolio.css'
import Star from '../Star/Star'
import img1 from '../imgs/imagesdonw1.png'
import img2 from '../imgs/imagesdonw2.png'
import img3 from '../imgs/imagesdonw3.png'

export default class Portfolio extends Component {

  state = {
    images: [img1, img2, img3],
    starColor: '#2c3e50' 
  }
  componentDidMount() {
    const portfolioItems = document.querySelectorAll('.portfolio-item')
    // layer when the user clicks on the image
    const imageFocus = document.querySelector('.imageFocus')

    portfolioItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        let img;
        if (e.target.tagName === 'I') {
          // if the user clicked on the plus icon
          img = e.target.parentElement.previousSibling;
        }
        else {
          // if the user clicked on the layer
          img = e.target.previousSibling;
        }
        imageFocus.children[0].src = img.src;
        imageFocus.classList.remove('d-none')
      })
    })

    // close imageFocus on click outside of the image
    imageFocus.addEventListener('click', (e) => {
      if (e.target.tagName !== 'IMG') {
        imageFocus.classList.add('d-none')
      }
    })
  }
  componentWillUnmount() {
    const portfolioItems = document.querySelectorAll('.portfolio-item')
    const imageFocus = document.querySelector('.imageFocus')
    portfolioItems.forEach((item) => {
      item.removeEventListener('click', (e) => {
        let img;
        if (e.target.tagName === 'I') {
          img = e.target.parentElement.previousSibling;
        }
        else {
          img = e.target.previousSibling;
        }
        imageFocus.children[0].src = img.src;
        imageFocus.classList.remove('d-none')
      })
    })
    // close imageFocus on click outside of the image
    imageFocus.removeEventListener('click', (e) => {
      if (e.target.tagName !== 'IMG') {
        imageFocus.classList.add('d-none')
      }
    })
  }
  render() {
    return (<>
      {/* layer when the user clicks on the image  */}
      <div className="imageFocus vh-100 w-100 position-fixed z-1 d-flex justify-content-center align-items-center bg-primary bg-opacity-25 d-none">
        <img src={img1} alt="portfolio-item" className='w-25' />
      </div>
      {/* portfolio component */}
      <div id="portfolio" className='vh-100'>
        <div className="container">
          {/* portfolio header */}
          <div className="portfolio-header mx-auto text-center">
            <h1 className='fw-bolder pt-3'>PORTFOLIO COMPONENT</h1>
            <Star color={this.state.starColor} />
          </div>
          {/* portfolio items */}
          <div className="row g-4 mt-5">
            {/* first row */}
            {this.state.images.map((img, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="portfolio-item position-relative rounded-3 overflow-hidden">
                    <img src={img} alt="portfolio-item" className='img-fluid  ' />
                    <div className="layer">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* second row */}
            {this.state.images.map((img, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="portfolio-item position-relative rounded-3 overflow-hidden">
                    <img src={img} alt="portfolio-item" className='img-fluid  ' />
                    <div className="layer">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>

        </div>
      </div>
    </>)
  }
}
