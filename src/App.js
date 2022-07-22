import React, {Component, Fragment} from 'react';

// Style
import './App.css';

// Library
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Route
import Content from './components/contents/Content';
import SkillDetail from './components/contents/skill/SkillDetail';
import PortofolioDetail from './components/contents/portofolio/PortofolioDetail';

class App extends Component{

  render(){
    return (
      <Router>
        <Fragment>
          <Switch>

            <Route path="/skill/:title">
              <SkillDetail />
            </Route>
            
            <Route path="/portofolio/:product">
              <PortofolioDetail />
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
