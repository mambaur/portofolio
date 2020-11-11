import React, {Component, Fragment} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <Fragment>
                <div className="footer">
                    <div className="sub-footer">
                        <div className="sub-footer-item">
                            <h3>Main menu</h3>
                            <p>Home</p>
                            <p>Portofolio</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>
                        <div className="sub-footer-item">
                            <h3>My Apps</h3>
                            <p>Dompet Saku</p>
                            <p>Al Quran Online</p>
                            <p>Resep Masakan</p>
                            <p>Sistem Pakar</p>
                        </div>
                        <div className="sub-footer-item">
                            <h3>About me</h3>
                            <p>Address</p>
                            <p>Introduction</p>
                            <p>Subscribe</p>
                        </div>
                        <div className="sub-footer-item">
                            <h3>Contact</h3>
                            <p>WhatApps</p>
                            <p>Telegram</p>
                            <p>Need help?</p>
                            <p>Give feedback</p>
                        </div>
                    </div>
                    <p>Designed & developed with <i class="fas fa-heart"></i> by <a href="#">Bauroziq</a> </p>
                    <div className="row">
                        <a className="footer-icon-link" href="#"><i class="fab fa-github"></i></a>
                        <a className="footer-icon-link" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a className="footer-icon-link" href="#"><i class="fab fa-instagram-square"></i></a>
                        <a className="footer-icon-link" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a className="footer-icon-link" href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Footer;