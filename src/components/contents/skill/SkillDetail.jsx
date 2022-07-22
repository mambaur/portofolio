import React, {Component, Fragment} from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import {Link, useParams} from "react-router-dom"
import { withRouter } from "react-router"
import Footer from '../footer/Footer'
import Subscribe from '../subscribe/Subscribe'

import SkillData from './SkillData'

import '../Content.css'
import './SkillDetail.css'

class SkillDetail extends Component {
    state = {
        menu : this.props.match.params.title
    }

    handleBack = () => {
        this.props.history.goBack()
    }

    componentDidMount = () => window.scrollTo(0, 0)

    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0)
    }

    render() {
        let data = SkillData.find( record => record.key === this.state.menu)
        return (
            <Fragment>
                <Container className="content">
                    <div className="back">
                        <Link className="back-link" onClick={this.handleBack}><i class="fas fa-long-arrow-alt-left"></i></Link>
                    </div>
                    {data ? <ContentSkill tech={this.props.match.params.title} /> : <SkillNotFound />}
                    
                    <Subscribe />
                    <Footer />
                </Container>
            </Fragment>
        )
    }
}

const ContentSkill = (props)=>{
    let data = SkillData.find( record => record.key === props.tech)
    
    return (
        <div className="skill-content">
            <div className="tech-desc">
                <div className="title">
                    <h3>{data.title}</h3>
                </div>
                {data.content.map((value, i) => {                   
                    return (<p>{value}</p>) 
                })}
                <p>
                    <a href={data.documentation}>See Documentation</a>
                </p>
            </div>

            <div className="tech-info">
                <img src={data.image} className="img-skill" alt="Skill Image" />

                <div className="detail-tech">
                    <span className="text-bold detail-title">Author</span> 
                    <span>{data.desc.author}</span>
                </div>
                <div className="detail-tech">
                    <span className="text-bold detail-title">Initial release</span> 
                    <span>{data.desc.initial_release}</span>
                </div>
                <div className="detail-tech">
                    <span className="text-bold detail-title">Platform</span> 
                    <span>{data.desc.platform}</span>
                </div>
                <div className="detail-tech">
                    <span className="text-bold detail-title">License</span> 
                    <span>{data.desc.license}</span>
                </div>
                
            </div>
        </div>
    )
}

const SkillNotFound = (props)=>{
    return (
        <div className="skill-content">
            <div className="tech-desc">
                <div className="title">
                    Ups, sorry skill not found!
                </div>
                <p>
                    You entered the wrong url address.
                </p>
            </div>
        </div>
    )
}

export default withRouter(SkillDetail)