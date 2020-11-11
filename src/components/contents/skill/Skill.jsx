import React, {Component, Fragment} from 'react';
import './Skill.css';

class Skill extends Component{
    render(){
        return(
            <Fragment>
                <div className="skill">
                    <h1>My Skill</h1>
                    <p>My Skill performance in technology</p>
                    <div className="skill-item">
                        <div className="skill-card">
                            <img src="https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://cdn.auth0.com/blog/react-js/react.png" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://lh3.googleusercontent.com/proxy/-mPC0pplNbXkaqEJ_gUA4rqelyxFtSdVXCBaiUsFJRMPTbiY4FR2-kvcWdmNFtyXbs6VYZ9IZr8A8y4RFzXJiA" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://pngimg.com/uploads/mysql/mysql_PNG23.png" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://sayapusing.com/wp-content/uploads/2019/04/javascript-icon-png-23.png" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Wordpress_Blue_logo.png" alt=""/>
                        </div>
                        <div className="skill-card">
                            <img src="https://www.tc-web.it/wp-content/uploads/2019/12/java.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Skill;