import React, {Component, Fragment} from 'react';
import './Navbar.css'

class Navbar extends Component{
    state = {
        isClicked : false
    }

    
    handleScrollElement = (id)=>{
        const element = document.getElementById(id);
        element.scrollIntoView({behavior: 'smooth'});
        this.setState({isClicked : !this.state.isClicked})
    }

    scrolltoTop = ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.setState({isClicked : !this.state.isClicked})
    }

    handleClick = ()=>{
        this.setState({isClicked : !this.state.isClicked})
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        document.querySelector(".nav-item").className = "nav-item nav-not-scrolled";
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 20) {
          document.querySelector("nav").className = "isScrolled";
          document.querySelector(".nav-item").className = "nav-item nav-scrolled";
        } else {
          document.querySelector("nav").className = "";
          document.querySelector(".nav-item").className = "nav-item nav-not-scrolled";
        }
      };

    render(){
        return (
            <Fragment>
                <nav>
                    <div className="nav-item">
                        <h1 className="navbar-logo" onClick={()=>this.scrolltoTop()}>Bauroziq</h1>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.isClicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        <div className="menu">
                            <ul className={this.state.isClicked ? "nav-menu active" : "nav-menu"}>
                                <li><a className="nav-links" onClick={()=>this.scrolltoTop()}>Home</a></li>
                                <li><a className="nav-links" onClick={()=>this.handleScrollElement('portofolio')} >Portofolio</a></li>
                                <li><a className="nav-links" href="https://caraguna.com" target="_blank">Blog</a></li>
                                <li><a className="nav-links" onClick={()=>this.handleScrollElement('skill')}>Skill</a></li>
                                <li><a className="nav-links" onClick={()=>this.handleScrollElement('introduction')}>About</a></li>
                                <li><a className="nav-links-mobile" href="caraguna.com">Download CV</a></li>
                            </ul>

                            <button className="btn"><i class="fas fa-download"></i> Download CV</button>
                        </div>
                    </div>
                </nav>
                <div className="content">

                </div>
            </Fragment>
        )
    }
}

export default Navbar;