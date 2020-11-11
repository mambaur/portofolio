import React, { Component, Fragment } from 'react';
import Jumbotron from './jumbotron/Jumbotron';
import Introduction from './Introduction/Introduction';
import Experience from './experience/Experience';
import './Content.css';

class Content extends Component {
    render(){
        return (
            <Fragment>
                <div className="content">
                    <Jumbotron />
                    <Introduction />
                    <Experience />
                </div>
            </Fragment>
        )
    }
}

export default Content;