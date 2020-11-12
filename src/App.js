import React, {Component, Fragment} from 'react';
import Navbar from './components/navbar/Navbar';
import Content from './components/contents/Content';
import Jumbotron from './components/contents/jumbotron/Jumbotron';
import Introduction from './components/contents/Introduction/Introduction';
import Experience from './components/contents/experience/Experience';
import Subscribe from './components/contents/subscribe/Subscribe';
import Footer from './components/contents/footer/Footer';
import Skill from './components/contents/skill/Skill';
import Portofolio from './components/contents/portofolio/Portofolio';
import './App.css';

class App extends Component{

  render(){
    return (
      <Fragment>
        <Navbar />
        <div className="content">
            <Jumbotron/>
            <Introduction />
            <Skill />
            <Portofolio />
            <Experience />
            <Subscribe />
            <Footer/>
        </div>
        {/* <Content /> */}
      </Fragment>
    )
  }
}

export default App;

// Reference
// https://atomizecode.com/
