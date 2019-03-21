import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './reference.scss';

const cx = classNames.bind(styles);

class ValidationSample extends Component{
    state = {
        password: '',
        clicked: false,
        validate: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validate: this.state.password === '0000'
        });
        this.password.focus();
    }

    render(){
        return(
            <div>
                <input
                ref={(ref)=>{this.password = ref}}
                type="password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                className={this.state.clicked?(this.state.validate?cx('success'):cx('failure')):''}/>
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;