import React, {Component, Fragment} from 'react';
import './Footer.css';

class Footer extends Component {

    handleScrollElement = (id)=>{
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: 'smooth'});
    }

    scrolltoTop = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    render(){
        return(
            <Fragment>
                <div className="footer">
                    <div className="sub-footer">
                        <div className="sub-footer-item">
                            <h3>Main Menu</h3>
                            <a onClick={()=>this.scrolltoTop()}><p>Home</p></a>
                            <a onClick={()=>this.handleScrollElement('portofolio')}><p>Portofolio</p></a>
                            <a href="https://caraguna.com" target="_blank"><p>Blog</p></a>
                            <a onClick={()=>this.handleScrollElement('skill')}><p>Skill</p></a>
                            <a onClick={()=>this.handleScrollElement('introduction')}><p>About</p></a>
                        </div>
                        <div className="sub-footer-item">
                            <h3>My Apps</h3>
                            <a href="https://play.google.com/store/apps/details?id=com.caraguna.dompet_apps" target="_blank"><p>Dompet Saku</p></a>
                            <a href="https://play.google.com/store/apps/details?id=com.caraguna.alquran_app" target="_blank"><p>Al Quran Online</p></a>
                            <a href="https://play.google.com/store/apps/details?id=com.caraguna.recipe_apps" target="_blank"><p>Resep Masakan</p></a>
                            <a href="https://play.google.com/store/apps/details?id=com.Devb.sipakar_apps" target="_blank"><p>Sistem Pakar</p></a>
                        </div>
                        <div className="sub-footer-item">
                            <h3>About Me</h3>
                            <a href="https://goo.gl/maps/ffXWfFn8zE1FnK8j9" target="_blank"><p>Address</p></a>
                            <a onClick={()=>this.handleScrollElement('introduction')}><p>Introduction</p></a>
                            <a onClick={()=>this.handleScrollElement('subscribe')}><p>Subscribe</p></a>
                        </div>
                        <div className="sub-footer-item">
                            <h3>Contact</h3>
                            <a href="https://wa.me/6285604959785" target="_blank"><p>WhatsApp</p></a>
                            <a href="https://t.me/Mambaur" target="_blank"><p>Telegram</p></a>
                            <a href="" target="_blank"><p>Need help?</p></a>
                            <a href="" target="_blank"><p>Give feedback</p></a>
                        </div>
                    </div>
                    <p>Designed & developed with <i class="fas fa-heart"></i> by <a href="#">Bauroziq</a> </p>
                    <div className="row">
                        <a className="footer-icon-link" href="https://github.com/mambaur" target="_blank"><i class="fab fa-github"></i></a>
                        <a className="footer-icon-link" href="https://www.linkedin.com/in/mambaur-roziq-605962167/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a className="footer-icon-link" href="https://www.instagram.com/bauroziq/" target="_blank"><i class="fab fa-instagram-square"></i></a>
                        <a className="footer-icon-link" href="https://web.facebook.com/alwi.roziq/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a className="footer-icon-link" href="https://www.youtube.com/channel/UCnXqsH_El2uOZDM6gEpRJmA" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Footer;