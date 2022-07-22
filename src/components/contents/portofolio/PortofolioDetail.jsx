import React, { Component, Fragment } from 'react'
import {Link, useParams } from "react-router-dom"
import { withRouter } from "react-router"
import Subscribe from '../subscribe/Subscribe'
import Footer from '../footer/Footer'
import { Container, Button, Row, Col } from 'react-bootstrap'
import './PortofolioDetail.css'

import '../Content.css'

import PortofolioData from './PortofolioData'

class PortofolioDetail extends Component{
    state = {
        product : this.props.match.params.product
    }

    handleBack = () => {
        this.props.history.goBack()
    }
    
    componentDidMount = () => window.scrollTo(0, 0)

    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0)
    }

    render(){
        let data = PortofolioData.find( record => record.key === this.state.product)

        return(
            <Fragment>
                <Container className="content">
                    <div className="back">
                        <Link className="back-link" onClick={this.handleBack}><i class="fas fa-long-arrow-alt-left"></i></Link>
                    </div>
                    
                    {data ? <PortofolioContent product={this.state.product} /> : <PortofolioNotFound />}
                    
                    <Subscribe />
                    <Footer />
                </Container>
            </Fragment>
        )
    }
}

const PortofolioContent = (props)=>{
    
    let data = PortofolioData.find( record => record.key === props.product)
    return (
        <div className="porto-container">
            <div className="container">
                <div className="title">{data.title}</div>
                <span className="subtitle">{data.subtitle}</span>

                <div className="image">
                    <img src={data.image} width="50%" alt="" />
                </div>

                <div className="description">
                    {data.content.map((value, i) => {                   
                        return (<p>{value}</p>) 
                    })}
                </div>
            </div>

            <div className="button">
                <a className="button-see" href={data.link} target="_blank">See More About Apps</a>
            </div>
        </div>
    )
}

const PortofolioNotFound = (props)=>{
    return (
        <div className="porto-container">
            <div className="container">
                <div className="title">
                    Ups, sorry portofolio not found!
                </div>
                <p>
                    You entered the wrong url address.
                </p>
            </div>
        </div>
    )
}

export default withRouter(PortofolioDetail)