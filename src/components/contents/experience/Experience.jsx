import React, {Component, Fragment} from 'react';
import './Experience.css';

import logosma from '../../../assets/logo/logo-sma.jpg';
import galaxyproperty from '../../../assets/experience/galaxyproperty.jpg';
import polije from '../../../assets/experience/polije.png';
import smana from '../../../assets/experience/smana.jpg';
import ukmlumut from '../../../assets/experience/ukmlumut.jpeg';

class Experience extends Component {
    render(){
        return(
            <Fragment>
                <div className="experience">
                    <div className="experience-title">
                        <h1>School & Experience</h1>
                        <p>My school and works experience</p>
                    </div>
                    <div className="card">
                        <div className="card-item">
                            <img src={logosma} alt=""/>
                            <h3>SMA Negeri Ambulu Jember</h3>
                            <p>2013-2016</p>
                            <p>Science</p>
                        </div>

                        <div className="card-item">
                            <img src={polije} alt=""/>
                            <h3>State Polytechnic Jember</h3>
                            <p>2016-2020 (Bachelor degrees)</p>
                            <p>Informatics Engineering</p>
                        </div>

                        <div className="card-item">
                            <img src={galaxyproperty} alt=""/>
                            <h3>Galaxy Property</h3>
                            <p>February 2021 - Now</p>
                            <p>Software Developer</p>
                        </div>
                        <div className="card-item">
                            <img src={ukmlumut} alt=""/>
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