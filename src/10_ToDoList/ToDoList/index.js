import React, { Component } from 'react';
import ToDoItem from '../ToDoItem';

class ToDoList extends Component{
    render(){
        return(
            <div>
                <ToDoItem done>리액트 공부하기</ToDoItem>
                <ToDoItem>컴포넌트 스타일링 해보기</ToDoItem>
            </div>
        );
    }
}

export default ToDoList;