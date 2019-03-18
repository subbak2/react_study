import React, { Component } from 'react';

class EventHandling extends Component {
    state = {
        username: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress = () => {
        this.handleClick();
    }

    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}/>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}/>
                <button onClick={this.handleClick}>제출</button>
                
            </div>
        );
    }
}

export default EventHandling;