import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        name: '기본 이름'
    }

    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    state = {
        number: 0
    }

    render() {
        return (
            <div onClick={() => {
                this.setState({
                    number: this.state.number + 1
                })
            }}>
                [{this.state.number}] 안녕하세요, 제 이름은 {this.props.name}, 나이는 {this.props.age}살 입니다.
            </div>
        );
    }
}

export default MyComponent;