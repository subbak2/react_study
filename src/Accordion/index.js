import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './arccodion.scss';

const cx = classNames.bind(styles);

class Arccodion extends Component{
    state = {
        toggle: false
    }

    ToggleMethod = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render(){
        return(
            <div className={cx('arccodion')}>
                <h3 id={cx('title')} onClick={this.ToggleMethod}>{this.props.title}</h3>
                <div className={cx({'show':this.state.toggle}, {'hide':!this.state.toggle})}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Arccodion;