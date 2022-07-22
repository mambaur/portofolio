import React, {Component, Fragment} from 'react';
import './Jumbotron.css';

// image assets profil
import profil from '../../../assets/website/profil.png';
import qrcode from '../../../assets/website/qrcode-bauroziq.png';

class Jumbotron extends Component {
    render(){
        return (
            <Fragment>
                <div id="jumbotron" className="jumbotron">
                    <div className="row">
                        <img class="qrcode" src={qrcode} alt="" />
                        <h1 className="title">
                            Hi, I am Bauroziq 👾
                        </h1>
                        <div className="sub-title">
                            <h3>Software Developer</h3>
                            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Animated-Flag-Indonesia.gif" alt=""/> */}
                        </div>
                        <div className="btn-jumbotron">
                            <a href="https://www.linkedin.com/in/mambaur-roziq-605962167/" target="_blank"><span>My linkedin</span> <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="row">
                        <img className="img-jumbotron" src={profil} alt=""/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Jumbotron;