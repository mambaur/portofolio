import React, {Component, Fragment} from 'react';
import './Introduction.css';

class Introduction extends Component {
    render(){
        return(
            <Fragment>
                <div className="introduction">
                    <img src="https://cdn.dribbble.com/users/77598/screenshots/5919494/dribbble.png" alt=""/>

                    <div className="introduction-text">
                        <h1>Let Me Introduce</h1>
                        <h1> Myself</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, facilis nisi amet asperiores officia excepturi ducimus fugiat! Cupiditate autem quibusdam quidem veritatis sed earum rerum asperiores aut excepturi animi. <br/><br/>Nihil, dolores molestias! Fuga ab aspernatur ipsa? Alias quaerat nulla praesentium quibusdam iure eveniet quas quasi!</p>
                        <div className="btn-download-cv">Download CV</div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Introduction;