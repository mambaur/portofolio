import React, {Component, Fragment} from 'react';
import './Navbar.css'

class Navbar extends Component{
    state = {
        isClicked : false
    }

    handleClick = ()=>{
        this.setState({isClicked : !this.state.isClicked})
    }

    render(){
        return (
            <Fragment>
                <nav className="nav-item">
                    <h1 className="navbar-logo">Bauroziq</h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i class={this.state.isClicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={this.state.isClicked ? "nav-menu active" : "nav-menu"}>
                        <li><a className="nav-links" href="caraguna.com">Home</a></li>
                        <li><a className="nav-links" href="caraguna.com">Resume</a></li>
                        <li><a className="nav-links" href="caraguna.com">Blog</a></li>
                        <li><a className="nav-links-mobile" href="caraguna.com">Download CV</a></li>
                    </ul>
                    <button className="btn">Download CV</button>
                </nav>
            </Fragment>
        )
    }
}

export default Navbar;