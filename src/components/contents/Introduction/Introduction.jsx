import React, {Component, Fragment} from 'react';
import './Introduction.css';

class Introduction extends Component {
    render(){
        return(
            <Fragment>
                <div id="introduction" className="introduction">
                    <img src="https://cdn.dribbble.com/users/77598/screenshots/5919494/dribbble.png" alt=""/>

                    <div className="introduction-text">
                        <h1>Let Me Introduce</h1>
                        <h1> Myself</h1>
                        <p>
                            My name is Mambaur Roziq Alwi, i was born in Jember, Indonesia. I have good communicative, tolerant, discipline, and target oriented. I am very interested in the development of technology, especially in programming.
                            <br/><br/>
                            I like to learn new things related to the latest technology in the world. Besides of that, I can work with the team better. 
                        </p>
                        <a href="https://bit.ly/bauroziq-resume" target="_blank"><div className="btn-download-cv">Download CV</div></a>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Introduction;