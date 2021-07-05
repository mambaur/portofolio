import React, { Component, Fragment } from 'react'
import {Link, useParams} from "react-router-dom"
import { withRouter } from "react-router"
import Footer from '../footer/Footer'
import { Container, Button, Row, Col } from 'react-bootstrap'
import './PortofolioDetail.css'

import '../Content.css'

class PortofolioDetail extends Component{
    state = {
        product : this.props.match.params.product
    }

    componentDidMount = () => window.scrollTo(0, 0)

    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0)
    }

    render(){
        return(
            <Fragment>
                <Container className="content">
                    <div className="back">
                        <Link className="back-link" to="/"><i class="fas fa-long-arrow-alt-left"></i></Link>
                    </div>
                    {this.state.product ? <PortofolioContent productName={this.state.product} />: <div>Page not found</div>}
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

const PortofolioContent = (props)=>{
    return (
        <div className="porto-container">
            <div className="container">
                <div className="title">{props.productName}</div>
                <span className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quidem.</span>

                <div className="description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure expedita nam optio deleniti, voluptate facilis eum vero libero asperiores voluptatibus vitae ducimus rerum? Adipisci quis esse voluptate architecto minima quidem earum. Perferendis earum ipsam quaerat veniam ipsa et cum, reprehenderit expedita suscipit ab dolorum laboriosam aliquam sunt accusamus in harum?
                </div>
            </div>
            {/* <img src="http://localhost:3000/static/media/alquran-app.ca29cbd5.jpg" alt="" /> */}

            <div className="button">
                <a className="button-see" href="">See website</a>
                <a className="button-see" href="">Download on Playstore</a>
            </div>
        </div>
    )
}

export default withRouter(PortofolioDetail)