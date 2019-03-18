import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Arccodion from './Accordion';
import JSX from './02_JSX';
import MyComponent from './03_Component';
import EventHandling from './04_EventHandling';
import Reference from './05_Reference';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            [Nankisu's React Study]
          </p>
        </header>
        <Arccodion title="2장. JSX">
            <JSX/>
          </Arccodion>
          <Arccodion title="3장. 컴포넌트">
            <MyComponent name="React" age={4}/>
          </Arccodion>
          <Arccodion title="4장. 이벤트 핸들링">
            <EventHandling/>
          </Arccodion>
          <Arccodion title="5장. 레퍼런스">
            <Reference/>
          </Arccodion>
      </div>
    );
  }
}

export default App;
