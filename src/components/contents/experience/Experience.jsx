import React, {Component, Fragment} from 'react';
import './Experience.css';
import logosma from '../../../assets/logo/logo-sma.jpg';

class Experience extends Component {
    render(){
        return(
            <Fragment>
                <div className="experience">
                    <div className="experience-title">
                        <h1>School & Experience</h1>
                        <p>My school and experience</p>
                    </div>
                    <div className="card">
                        <div className="card-item">
                            <img src={logosma} alt=""/>
                            <h3>SMA Negeri Ambulu Jember</h3>
                            <p>2013-2016</p>
                            <p>Science</p>
                        </div>

                        <div className="card-item">
                            <img src="https://kadowisudaku.com/wp-content/uploads/2020/04/Politeknik-Negeri-Jember.png" alt=""/>
                            <h3>State Polytechnic Jember</h3>
                            <p>2016-2020 (Bachelor degrees)</p>
                            <p>Informatics Engineering</p>
                        </div>

                        <div className="card-item">
                            <img src="https://static.wixstatic.com/media/142d5c_1e17af77ac664071a29a191ea9f54883~mv2.png/v1/fill/w_73,h_72,al_c,q_85,usm_0.66_1.00_0.01/142d5c_1e17af77ac664071a29a191ea9f54883~mv2.webp" alt=""/>
                            <h3>Pyxis Ultimate Solution</h3>
                            <p>February - May 2020</p>
                            <p>Internship Program</p>
                        </div>
                        <div className="card-item">
                            <img src="https://pbs.twimg.com/profile_images/378800000119212907/407f7c467179ab59a2f7702f758f7410_400x400.jpeg" alt=""/>
                            <h3>UKM Lumut Organization</h3>
                            <p>2017-2020</p>
                            <p>Arts Organization</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Experience;