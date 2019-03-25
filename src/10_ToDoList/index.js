import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList'
import './utils.scss';

class App extends Component{
    render(){
        return(
            <div>
                <PageTemplate>
                    <ToDoInput/>
                    <ToDoList/>
                </PageTemplate>
            </div>
        );
    }
}

export default App;