import React, {Component} from 'react';
import Lifecycle from './Lifecycle';

class LifecycleApp extends Component{
    state = {
        color: '#000000'
    }

    getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    handleClick = () => {
        this.setState({
            color: this.getRandomColor()
        });
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>랜덤 색상</button>
                <Lifecycle color={this.state.color}/>
            </div>
        )
    }
}

export default LifecycleApp;