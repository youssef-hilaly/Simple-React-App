import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {

    ChangeNavLinkStyle() {
        const navLinks = document.querySelectorAll('.nav-link');
        let current = window.location.pathname;
        navLinks.forEach(navLink => {
            if (navLink.getAttribute('href') === current) {
                navLink.classList.add('active')
            }
        })
    }
    componentDidMount() {
        // change navlink style on page load
        this.ChangeNavLinkStyle()

        // scroll navbar
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) 
                navbar.classList.remove('py-4')
            else 
                navbar.classList.add('py-4')
        })

        // navlinks click
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(navLink => {
            navLink.addEventListener('click', () => {
                navLinks.forEach(navLink => navLink.classList.remove('active'))
                navLink.classList.add('active')
            })
        })

        // navlogo click
        const navLogo = document.querySelector('.navbar-brand');
        navLogo.addEventListener('click', () => {
            navLinks.forEach(navLink => navLink.classList.remove('active'))
        })
    }
  render() {
    return (<>
    {/* bootstrap navbar */}
    <nav className="navbar navbar-expand-lg bg-main fixed-top py-4">
        <div className="container">
            <Link className="navbar-brand fw-bold text-white fs-1" to="/">START FRAMEWORK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item me-4">
                        <Link className="nav-link fw-bold text-white" aria-current="page" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item me-4">
                        <Link className="nav-link fw-bold text-white" to="/portfolio">PORTFOLIO</Link>
                    </li>
                    <li className="nav-item me-4">
                        <Link className="nav-link fw-bold text-white" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        
    </>);
  }
}
