import React, {Component, Fragment} from 'react';

// Style
import './App.css';

// Library
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Route
import Navbar from './components/navbar/Navbar';
import Content from './components/contents/Content';
import Jumbotron from './components/contents/jumbotron/Jumbotron';
import Introduction from './components/contents/Introduction/Introduction';
import Experience from './components/contents/experience/Experience';
import Subscribe from './components/contents/subscribe/Subscribe';
import Footer from './components/contents/footer/Footer';
import Skill from './components/contents/skill/Skill';
import SkillDetail from './components/contents/skill/SkillDetail';
import Portofolio from './components/contents/portofolio/Portofolio';

class App extends Component{

  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/skill/:title">
              <SkillDetail />
            </Route>
            <Route path="/" exact>
              <Content />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App;

// Reference
// https://atomizecode.com/
