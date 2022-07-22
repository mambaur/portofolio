import React, {Component, Fragment} from 'react';
import './Introduction.css';


import introduce from '../../../assets/website/introduce.webp';

class Introduction extends Component {
    render(){
        return(
            <Fragment>
                <div id="introduction" className="introduction">
                    <img src={introduce} alt=""/>
                    {/* <img src="https://cdn.dribbble.com/users/77598/screenshots/5919494/dribbble.png" alt=""/> */}

                    <div className="introduction-text">
                        <h1>Let Me Introduce</h1>
                        <h1> Myself 🤗</h1>
                        <p>
                            Hai guys, I am Mambaur Roziq Alwi, usually called <strong>Bauroziq</strong>. I was born in Jember, Indonesia. I am very interested in the development of technology, especially in programming.
                            <br/><br/>
                            I like to learn new things related to the latest technology in the world, such as frameworks, cloud computing, ai, and machine learning.
                        </p>
                        <a href="https://drive.google.com/u/2/uc?id=1S_3747GzM_tBwl6ERWXDhtPjQ_DHQx-d&export=download" target="_blank"><div className="btn-download-cv">Download CV</div></a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Introduction;