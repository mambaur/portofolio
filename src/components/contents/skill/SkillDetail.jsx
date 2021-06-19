import React, {Component, Fragment} from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import {Link, useParams} from "react-router-dom";
import { withRouter } from "react-router";
import Footer from '../footer/Footer';

import '../Content.css';
import './SkillDetail.css';

// Image
import flutter from '../../../assets/technology/flutter.png';

class SkillDetail extends Component {

    componentDidMount = () => window.scrollTo(0, 0);

    componentDidUpdate = prevProps => {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
    };

    render() {
        return (
            <Fragment>
                <Container className="content">
                    <div className="back">
                        <Link className="back-link" to="/"><i class="fas fa-long-arrow-alt-left"></i></Link>
                    </div>

                    <div className="skill-content">
                        <div className="tech-desc">
                            <div className="title">
                                <h3>{this.props.match.params.title}</h3>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam blanditiis, ullam cum omnis quasi cumque maxime a tenetur nemo eveniet, culpa veniam adipisci dolorum atque non. Odit adipisci ab dolorum quod nostrum, illo similique quisquam libero recusandae aliquid non veritatis repudiandae, enim perspiciatis modi rem nobis aut magni eos excepturi?
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit officia dignissimos, dicta sint laborum quo, magnam doloribus reprehenderit nisi asperiores cumque, veniam ad temporibus nobis blanditiis. Optio deserunt voluptate aperiam a nostrum dicta, similique enim eos unde alias ipsam non! Laborum odit exercitationem veritatis temporibus ex ipsa, voluptas non aliquid deleniti ipsum quae iste quisquam laboriosam dolor vero, illum cupiditate.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, repudiandae sed. Perferendis accusamus ab pariatur obcaecati magni? Non provident temporibus quibusdam iste alias harum a cupiditate corporis omnis exercitationem dicta aut repellat, ipsam unde?
                            </p>
                            <p>
                                <a href="">See Documentation</a>
                            </p>
                        </div>

                        <div className="tech-info">
                            <img src={flutter} className="img-skill" alt="Skill Image" />

                            <div className="detail-tech">
                                <span className="text-bold detail-title">Author</span> 
                                <span>Google and community</span>
                            </div>
                            <div className="detail-tech">
                                <span className="text-bold detail-title">Initial release</span> 
                                <span>Alpha (v0.0.6)</span>
                            </div>
                            <div className="detail-tech">
                                <span className="text-bold detail-title">Platform</span> 
                                <span>Android, iOS</span>
                            </div>
                            <div className="detail-tech">
                                <span className="text-bold detail-title">License</span> 
                                <span>New BSD License</span>
                            </div>
                            
                        </div>
                    </div>
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

export default withRouter(SkillDetail);