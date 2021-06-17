import React, {Component, Fragment} from 'react';
import './Skill.css';

// assets image
import phplogo from '../../../assets/logo/logo-php.png';
import dart from '../../../assets/technology/dart.png';
import flutter from '../../../assets/technology/flutter.png';
import java from '../../../assets/technology/java.png';
import javascript from '../../../assets/technology/javascript.png';
import laravel from '../../../assets/technology/laravel.png';
import mysql from '../../../assets/technology/mysql.png';
import php from '../../../assets/technology/php.png';
import react from '../../../assets/technology/react.png';
import wordpress from '../../../assets/technology/wordpress.png';
import android_studio from '../../../assets/technology/android-studio.png';

class Skill extends Component{
    render(){
        return(
            <Fragment>
                <div id="skill" className="skill">
                    <h1>My Skill</h1>
                    <p>My skill performance in technology</p>
                    <div className="skill-item">
                        <div className="skill-card">
                            <img src={flutter} alt=""/>
                            <div className="progress">
                                <h4>Flutter 90%</h4>
                                <div className="meter">
                                    <span className="flutter"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={laravel} alt=""/>
                            <div className="progress">
                                <h4>Laravel 85%</h4>
                                <div className="meter">
                                    <span className="laravel"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={react} alt=""/>
                            <div className="progress">
                                <h4>ReactJS 80%</h4>
                                <div className="meter">
                                    <span className="react"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={android_studio} alt=""/>
                            <div className="progress">
                                <h4>Android 95%</h4>
                                <div className="meter">
                                    <span className="android"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={dart} alt=""/>
                            <div className="progress">
                                <h4>Dart 90%</h4>
                                <div className="meter">
                                    <span className="dart"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={phplogo} alt=""/>
                            <div className="progress">
                                <h4>PHP 95%</h4>
                                <div className="meter">
                                    <span className="php"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={mysql} alt=""/>
                            <div className="progress">
                                <h4>Mysql 95%</h4>
                                <div className="meter">
                                    <span className="mysql"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={javascript} alt=""/>
                            <div className="progress">
                                <h4>Javascript 85%</h4>
                                <div className="meter">
                                    <span className="javascript"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={wordpress} alt=""/>
                            <div className="progress">
                                <h4>Wordpress 95%</h4>
                                <div className="meter">
                                    <span className="wordpress"></span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-card">
                            <img src={java} alt=""/>
                            <div className="progress">
                                <h4>Java 85%</h4>
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