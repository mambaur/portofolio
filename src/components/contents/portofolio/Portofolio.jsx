import React, {Component, Fragment} from 'react';
import './Portofolio.css';

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
                        {this.state.tab === "mobile" ? <MobileGalery /> : this.state.tab === "website" ? <WebsiteGalery /> : <div></div>}
                        
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
                <img src="https://images-platform.99static.com/PbZ_ZL8AovsbiTVsVjqUxkdBPxM=/140x0:1679x1539/500x500/top/smart/99designs-contests-attachments/111/111062/attachment_111062087" alt=""/>
                <h4>Dompet Saku</h4>
                <p>Money management app</p>
            </div>
            <div className="galery-item">
                <img src="https://cdn5.f-cdn.com/contestentries/1476336/24595406/5c7f8d00a2725_thumb900.jpg" alt=""/>
                <h4>Al Quran App</h4>
                <p>Money management app</p>
            </div>
            <div className="galery-item">
                <img src="https://images-platform.99static.com/o4drVDGC5MsRQ8Jbr5Z-oHbkbkM=/0x0:2040x2040/500x500/top/smart/99designs-contests-attachments/97/97615/attachment_97615618" alt=""/>
                <h4>Resep App</h4>
                <p>Money management app</p>
            </div>
            <div className="galery-item">
                <img src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/The-Ultimate-Guide-to-Mobile-App-Design/principles-the-ultimate-guide-to-mobile-app-design-designcrowd-blog.png" alt=""/>
                <h4>Resep App</h4>
                <p>Money management app</p>
            </div>
        </div>
    )
}

const WebsiteGalery = ()=>{
    return(
        <div className="galery">
            <div className="galery-item">
                <img src="https://images-platform.99static.com/0tAQ6nFlTuIuN3djgjsAImMHggA=/0x0:2040x2040/500x500/top/smart/99designs-contests-attachments/98/98308/attachment_98308107" alt=""/>
                <h4>Resep App</h4>
                <p>Money management app</p>
            </div>
        </div>
    )
}

export default Portofolio;