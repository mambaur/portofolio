import React, {Component, Fragment} from 'react';
import Navbar from './components/navbar/Navbar';
import Content from './components/contents/Content';
import './App.css';

class App extends Component{
  render(){
    return (
      <Fragment>
        <Navbar />
        <Content />
      </Fragment>
    )
  }
}

export default App;

// Reference
// https://atomizecode.com/
