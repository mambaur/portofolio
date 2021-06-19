import React, { Component, Fragment } from 'react';
import Jumbotron from './jumbotron/Jumbotron';
import Navbar from '../navbar/Navbar';
import Introduction from './Introduction/Introduction';
import Experience from './experience/Experience';
import Subscribe from './subscribe/Subscribe';
import Footer from './footer/Footer';
import Skill from './skill/Skill';
import Portofolio from './portofolio/Portofolio';
import './Content.css';

class Content extends Component {
    render(){
        return (
            <Fragment>
                <Navbar />
                <div className="content">
                    <Jumbotron />
                    <Introduction />
                    <Skill />
                    <Portofolio />
                    <Experience />
                    <Subscribe />
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default Content;