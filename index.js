import React, { Component } from 'react';
import { render } from 'react-dom';
import MainPage from './components/MainPage';
import './style.css';

class App extends Component {

  render() {
    return (
      <MainPage />
    );
  }
}

render(<App />, document.getElementById('root'));
