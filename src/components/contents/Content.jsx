import React, { Component, Fragment } from 'react';
import Jumbotron from './jumbotron/Jumbotron';
import Introduction from './Introduction/Introduction';
import Experience from './experience/Experience';
import Subscribe from './subscribe/Subscribe';
import Footer from './footer/Footer';
import Skill from './skill/Skill';
import './Content.css';

class Content extends Component {
    render(){
        return (
            <Fragment>
                <div className="content">
                    <Jumbotron />
                    <Introduction />
                    <Skill />
                    <Experience />
                    <Subscribe />
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default Content;