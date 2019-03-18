import React, {Component} from 'react';
import './arccodion.css';

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
            <div className="arccodion">
                <h3 id="title" onClick={this.ToggleMethod}>{this.props.title}</h3>
                <div className={this.state.toggle?'show':'hide'}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Arccodion;