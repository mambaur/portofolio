import React, {Component, Fragment} from 'react';
import './Navbar.css'

class Navbar extends Component{
    state = {
        isClicked : false
    }

    handleClick = ()=>{
        this.setState({isClicked : !this.state.isClicked})
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
    
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }
    
      handleScroll = () => {
        if (window.scrollY > 20) {
          document.querySelector("nav").className = "navbar isScrolled"
        } else {
          document.querySelector("nav").className = "navbar";
        }
      };

    render(){
        return (
            <Fragment>
                <nav>
                    <div className="nav-item">
                        <h1 className="navbar-logo">Bauroziq</h1>
                        <div className="menu-icon" onClick={this.handleClick}>
                            <i className={this.state.isClicked ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                        <div className="menu">
                            <ul className={this.state.isClicked ? "nav-menu active" : "nav-menu"}>
                                <li><a className="nav-links" href="caraguna.com">Home</a></li>
                                <li><a className="nav-links" href="caraguna.com">Portofolio</a></li>
                                <li><a className="nav-links" href="caraguna.com">Blog</a></li>
                                <li><a className="nav-links" href="caraguna.com">About</a></li>
                                <li><a className="nav-links" href="caraguna.com">Contact</a></li>
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