import React, {Component} from 'react';

class Iteration extends Component{
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    handleRemove = (index) => {
        const names = this.state.names;
        this.setState({
            names: names.slice(0, index).concat(names.slice(index + 1, names.length))
        })
    }

    render(){
        const nameLists = this.state.names.map((name, index) => 
            {return (<li key={index} onClick={() => this.handleRemove(index)}>{name}</li>)})
        return(
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.name}/>
                <button onClick={this.handleInsert}>추가</button>
                {nameLists}
            </div>
        );
    }
}

export default Iteration;