import React, {Component, Fragment} from 'react';
import './Portofolio.css';

// Image assets mobile
import alquran from '../../../assets/mobile/alquran-app.jpg';
import dompet from '../../../assets/mobile/dompet-saku.jpg';
import recipe from '../../../assets/mobile/recipe-app.jpg';
import sipakar from '../../../assets/mobile/sipakar-app.jpg';

// Image assets website
import foodshop from '../../../assets/website/foodshop.png';
import portofolio from '../../../assets/website/portofolio.jpg'
import sipakarweb from '../../../assets/website/sipakar-web.jpg';

// Image assets logo design
import amplify from '../../../assets/logo-design/amplif-logo.png';
import authent from '../../../assets/logo-design/authent-logo.png';
import dog from '../../../assets/logo-design/dog-logo.png';
import option from '../../../assets/logo-design/option-lance.png';
import verrelli from '../../../assets/logo-design/verrelli-logo.png';

class Portofolio extends Component{
    state = {
        tab : 'mobile'
    }

    handleTabClick = (tab)=>{
        this.setState({tab : tab})
    }

    render(){
        return(
            <Fragment>
                <div id="portofolio" className="portofolio">
                    <div className="portofolio-title">
                        <h1>Recently Done Project</h1>
                        <p>Quality project</p>
                    </div>
                    <div className="portofolio-content">
                        <div className="tab-menu">
                            <span className={this.state.tab === "mobile"? "menu-item active" : "menu-item"} onClick={()=>this.handleTabClick('mobile')}>MOBILE</span>
                            <span className={this.state.tab === "website"? "menu-item active" : "menu-item"} onClick={()=>this.handleTabClick('website')}>WEBSITE</span>
                            <span className={this.state.tab === "logo"? "menu-item active" : "menu-item"} onClick={()=>this.handleTabClick('logo')}>LOGO DESIGN</span>
                        </div>
                        {this.state.tab === "mobile" ? <MobileGalery /> : this.state.tab === "website" ? <WebsiteGalery /> : <LogoGalery />}
                        
                    </div>
                </div>
            </Fragment>
        )
    }
}

const MobileGalery = ()=>{
    return (
        <div className="galery">
            <div className="galery-item">
                <a href="https://play.google.com/store/apps/details?id=com.caraguna.alquran_app" target="_blank"><img src={alquran} alt=""/></a>
                <div className="galery-title">
                    <h4>Al Quran</h4>
                    <p>Al Quran Online Indonesia</p>
                </div>
            </div>
            <div className="galery-item">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.caraguna.dompet_apps"><img src={dompet} alt=""/></a>
                <div className="galery-title">
                    <h4>Dompet Saku</h4>
                    <p>Money management application</p>
                </div>
            </div>
            <div className="galery-item">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.caraguna.recipe_apps"><img src={recipe} alt=""/></a>
                <div className="galery-title">
                    <h4>Recipe Application</h4>
                    <p>Indonesia food recipe</p>
                </div>
            </div>
            <div className="galery-item">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.Devb.sipakar_apps"><img src={sipakar} alt=""/></a>
                <div className="galery-title">
                    <h4>Sipakar Tembakau</h4>
                    <p>Identification of tobacco plant disease</p>
                </div>
            </div>
        </div>
    )
}

const WebsiteGalery = ()=>{
    return(
        <div className="galery">
            <div className="galery-item">
                <a target="_blank" href="https://shop.caraguna.com"><img src={foodshop} alt=""/></a>
                <div className="galery-title">
                    <h4>Food Shop</h4>
                    <p>Jember typical food</p>
                </div>
            </div>
            <div className="galery-item">
                <a target="_blank" href=""><img src={portofolio} alt=""/></a>
                <div className="galery-title">
                    <h4>Portofolio Website</h4>
                    <p>My portofolio website</p>
                </div>
            </div>
            <div className="galery-item">
                <a target="_blank" href="https://sipakar.caraguna.com/"><img src={sipakarweb} alt=""/></a>
                <div className="galery-title">
                    <h4>Sipakar Website</h4>
                    <p>Identification of tobacco plant disease web</p>
                </div>
            </div>
        </div>
    )
}

const LogoGalery = ()=>{
    return(
        <div className="galery">
            <div className="galery-item">
                <img src={amplify} alt=""/>
                <div className="galery-title">
                    <h4>Amplify Logo</h4>
                    <p>Amplify elegant logo</p>
                </div>
            </div>
            <div className="galery-item">
                <img src={authent} alt=""/>
                <div className="galery-title">
                    <h4>Autent Logo</h4>
                    <p>Simple authent logo</p>
                </div>
            </div>
            <div className="galery-item">
                <img src={dog} alt=""/>
                <div className="galery-title">
                    <h4>Dog Logo</h4>
                    <p>Beautiful dog shit logo</p>
                </div>
            </div>
            <div className="galery-item">
                <img src={option} alt=""/>
                <div className="galery-title">
                    <h4>Option Lance Logo</h4>
                    <p>Option lance simple logo</p>
                </div>
            </div>
            <div className="galery-item">
                <img src={verrelli} alt=""/>
                <div className="galery-title">
                    <h4>Verrelli Logo</h4>
                    <p>Verrely modern logo</p>
                </div>
            </div>
        </div>
    )
}

export default Portofolio;