import React, {Component, Fragment} from 'react';
import './Subscribe.css';

class Subscribe extends Component {
    render(){
        return(
            <Fragment>
                <div id="subscribe" className="subscribe">
                    <div className="subscribe-title">
                        <h1>Get Update From Anywhere</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, soluta!</p>
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