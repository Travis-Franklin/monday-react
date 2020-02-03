import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value : props.initialValue
        };
    }
    render() {
        return(
            <div>
            <button onClick={this._incrementValue}>++
                </button>
                <button onClick={this._decrementValue}>--
                </button>
                <h1>{this.state.value}</h1>
            </div>
        )
    };
    _incrementValue = () => {
        this.setState({
            value: this.state.value + 2
        });

    };
    _decrementValue = () => {
        this.setState ({
            value: this.state.value - 2
        });
    }

}


export default Counter;