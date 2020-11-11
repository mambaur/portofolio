import React, {Component, Fragment} from 'react';
import './Experience.css';

class Experience extends Component {
    render(){
        return(
            <Fragment>
                <div className="experience">
                    <div className="experience-title">
                        <h1>Experience</h1>
                        <p>My experience school in Indonesia</p>
                    </div>
                    <div className="card">
                        <div className="card-item">
                            <img src="https://kadowisudaku.com/wp-content/uploads/2020/04/Politeknik-Negeri-Jember.png" alt=""/>
                            <h3>Politeknik Negeri Jember</h3>
                            <p>Tahun 2016-2020</p>
                            <p>Teknik Informatika</p>
                        </div>

                        <div className="card-item">
                            <img src="https://kadowisudaku.com/wp-content/uploads/2020/03/Universitas-Jember.png" alt=""/>
                            <h3>Universitas Negeri Jember</h3>
                            <p>Tahun 2016-2020</p>
                            <p>Teknik Informatika</p>
                        </div>

                        <div className="card-item">
                            <img src="https://static.wixstatic.com/media/142d5c_1e17af77ac664071a29a191ea9f54883~mv2.png/v1/fill/w_73,h_72,al_c,q_85,usm_0.66_1.00_0.01/142d5c_1e17af77ac664071a29a191ea9f54883~mv2.webp" alt=""/>
                            <h3>Pyxis Ultimate Solution</h3>
                            <p>Tahun 2016-2020</p>
                            <p>Teknik Informatika</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Experience;