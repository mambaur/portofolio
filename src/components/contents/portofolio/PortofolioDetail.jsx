import React, { Component, Fragment } from 'react'
import {Link, useParams} from "react-router-dom"
import { withRouter } from "react-router"
import Footer from '../footer/Footer'
import { Container, Button, Row, Col } from 'react-bootstrap'

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
                    {this.state.product ? this.state.product : <div>Page not found</div>}
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

export default withRouter(PortofolioDetail)