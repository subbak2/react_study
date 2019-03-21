import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './Styling.scss';

const cx = classNames.bind(styles);

class Styling extends Component{
    render(){
        return(
            <div className={cx('SassComponent')}>
                <div className={cx('box', 'red')}></div>
                <div className={cx('box', 'orange')}></div>
                <div className={cx('box', 'yellow')}></div>
                <div className={cx('box', 'green')}></div>
                <div className={cx('box', 'blue')}></div>
                <div className={cx('box', 'indigo')}></div>
                <div className={cx('box', 'violet')}></div>
            </div>
        );
    }
}

export default Styling;