import React, { Component } from 'react'
import './Portfolio.css'
import Star from '../Star/Star'
import img1 from '../imgs/imagesdonw1.png'
import img2 from '../imgs/imagesdonw2.png'
import img3 from '../imgs/imagesdonw3.png'

export default class Portfolio extends Component {

  state = {
    images: [img1, img2, img3],
    starColor: '#2c3e50',
  }

  // layer that appears when the user clicks on any image
  // make global variable to use it in the whole component and not to select it every time
  imgLayer = undefined;
  
  // show layer when the user clicks on the image
  clickImageHandler = (e) => {
    let img;
    if (e.target.tagName === 'I') {
      // if the user clicked on the plus icon
      img = e.target.parentElement.previousSibling;
    }
    else {
      // if the user clicked on the layer
      img = e.target.previousSibling;
    }
    this.imgLayer.children[0].src = img.src;
    this.imgLayer.classList.remove('d-none');
  };

  // close imgLayer on click outside of the image
  closeImgLayer = (e) => {
    if (e.target.tagName !== 'IMG') {
      this.imgLayer.classList.add('d-none')
    }
  }
  
  componentDidMount() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    // initialize the imgLayer
    this.imgLayer = document.querySelector('.imgLayer');

    // show layer when the user clicks on the image
    portfolioItems.forEach((item) => {
      item.addEventListener('click', this.clickImageHandler);
    })

    // close imgLayer on click outside of the image
    this.imgLayer.addEventListener('click', this.closeImgLayer);
  }

  componentWillUnmount() {
    const portfolioItems = document.querySelectorAll('.portfolio-item')

    portfolioItems.forEach((item) => {
      item.removeEventListener('click',this.clickImageHandler);
    })

    this.imgLayer.removeEventListener('click', this.closeImgLayer);
  }

  render() {
    return (<>
      {/* layer when the user clicks on the image  */}
      <div className="imgLayer min-vh-100 w-100 position-fixed z-1 d-flex justify-content-center align-items-center bg-primary bg-opacity-25 d-none">
        <img src={img1} alt="portfolio-item"/>
      </div>
      {/* portfolio component */}
      <div id="portfolio" className='min-vh-100'>
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
