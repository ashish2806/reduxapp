import React, { Component } from 'react';

  
import './App.css';
import Routes from './router';
import { BrowserRouter,Link } from 'react-router-dom';
class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Routes />
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
