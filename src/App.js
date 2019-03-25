import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Arccodion from './Accordion';
import JSX from './02_JSX';
import MyComponent from './03_Component';
import EventHandling from './04_EventHandling';
import Reference from './05_Reference';
import Iteration from './06_Iteration';
import LifeCycle from './07_LifeCycle';
import FunctionalComponrnt from './08_FunctionalComponent';
import Styling from './09_Styling';
import ToDoList from './10_ToDoList';
import logo from './logo.svg';
import styles from './App.module.scss';

const cx = classNames.bind(styles);

class App extends Component {
  render() {
    const chapters = [
      {title:'2장. JSX', component: <JSX/>},
      {title:'3장. 컴포넌트', component: <MyComponent name='nankisu' age={26}/>},
      {title:'4장. 이벤트 핸들링', component: <EventHandling/>},
      {title:'5장. 레퍼런스', component: <Reference/>},
      {title:'6장. 컴포넌트 반복', component: <Iteration/>},
      {title:'7장. 컴포넌트 라이프사이클', component: <LifeCycle/>},
      {title:'8장. 함수형 컴포넌트', component: <FunctionalComponrnt name='nankisu'/>},
      {title:'9장. 컴포넌트 스타일링', component: <Styling/>},
      {title:'10장. 일정관리 웹 어플리케이션', component: <ToDoList/>}
    ];

    const arccodions = chapters.map((chapter, index) => 
      (<Arccodion key={index} title={chapter.title}>{chapter.component}</Arccodion>));

    return (
      <div className={cx('App')}>
        <header className={cx('App-header')}>
          <img src={logo} className={cx('App-logo')} alt="logo" />
          <p>
            [Nankisu's React Study]
          </p>
        </header>
        {arccodions}
      </div>
    );
  }
}

export default App;
