import React, {Component, Fragment} from 'react';
import './Skill.css';

class Skill extends Component{
    render(){
        return(
            <Fragment>
                <div id="skill" className="skill">
                    <h1>My Skill</h1>
                    <p>My Skill performance in technology</p>
                    <div className="skill-item">
                        <div className="skill-card">
                            {/* <h3>Worpress</h3> */}
                            <img src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" alt=""/>
                            <div className="progress">
                                <h4>90%</h4>
                                <div className="meter">
                                    <span className="flutter"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt=""/>
                            <div className="progress">
                                <h4>85%</h4>
                                <div className="meter">
                                    <span className="laravel"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.auth0.com/blog/react-js/react.png" alt=""/>
                            <div className="progress">
                                <h4>80%</h4>
                                <div className="meter">
                                    <span className="react"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png" alt=""/>
                            <div className="progress">
                                <h4>95%</h4>
                                <div className="meter">
                                    <span className="android"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" alt=""/>
                            <div className="progress">
                                <h4>90%</h4>
                                <div className="meter">
                                    <span className="dart"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://i.dlpng.com/static/png/6812373_preview.png" alt=""/>
                            <div className="progress">
                                <h4>95%</h4>
                                <div className="meter">
                                    <span className="php"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://pngimg.com/uploads/mysql/mysql_PNG23.png" alt=""/>
                            <div className="progress">
                                <h4>95%</h4>
                                <div className="meter">
                                    <span className="mysql"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://sayapusing.com/wp-content/uploads/2019/04/javascript-icon-png-23.png" alt=""/>
                            <div className="progress">
                                <h4>85%</h4>
                                <div className="meter">
                                    <span className="javascript"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png" alt=""/>
                            <div className="progress">
                                <h4>95%</h4>
                                <div className="meter">
                                    <span className="wordpress"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt=""/>
                            <div className="progress">
                                <h4>85%</h4>
                                <div className="meter">
                                    <span className="java"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Skill;