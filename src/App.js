import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Body />
      </div>
    );
  }
}

export default App;
