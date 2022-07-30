import React, {Component, Fragment} from 'react';
import './Subscribe.css';

class Subscribe extends Component {
    render(){
        return(
            <Fragment>

                <div className="youtube">
                    <div className="container-youtube">
                        <div className="iframe-wrapper">
                            <iframe id="ytplayer" type="text/html" width="100%"
                    src="https://www.youtube.com/embed/DmKLNkkeBsQ?autoplay=0&origin=https://bauroziq.com"
                    frameborder="0"></iframe>
                        </div>
                    </div>
                </div>

                <div id="subscribe" className="subscribe">
                    <div className="subscribe-title">
                        <h1>Get Update From Bauroziq 🎈</h1>
                        <p>Drop your email below to get latest information from bauroziq</p>
                    </div>
                    <div className="subscribe-content">
                        <input className="subscribe-input" type="text" placeholder="Your email..."/>
                        <div className="btn-subscribe">Subscribe</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Subscribe;