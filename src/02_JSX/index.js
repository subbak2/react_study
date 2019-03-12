import React, { Component, Fragment } from 'react';
import './JSX.css';

class JSX extends Component{
    render(){
        const text = '당신은 어썸한가요?';
        const condition = true;
        const style = {
            backgroundColor: 'gray',
            border: '1px solid black',
            height: Math.round(Math.random() * 300) + 50,
            width: Math.round(Math.random() * 300) + 50,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
        return (
            <Fragment>
                <h1>리액트 안녕!</h1>
                <h2>{text}</h2>
                <div className="my-div" style={style}>
                    {condition ? "참" : "거짓"}
                    {condition && "참"}
                </div>
                <br/>
            </Fragment>
        );
    }
}

export default JSX;