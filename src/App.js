import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import Routes from './router';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      </div>
    );
  }
}

export default App;
