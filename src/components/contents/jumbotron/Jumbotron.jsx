import React, {Component, Fragment} from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {
    render(){
        return (
            <Fragment>
                <div className="jumbotron">
                    <div className="row">
                        <h1 className="title">
                            Hi, I am Bauroziq
                        </h1>
                        <h3 className="sub-title">Programmer</h3>
                        <div className="btn-jumbotron">
                            <a href="#">Hire me now</a>
                        </div>
                    </div>
                    <div className="row">
                        <img className="img-jumbotron" src="https://kitadeveloper.id/assets/img/website.png" alt=""/>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Jumbotron;