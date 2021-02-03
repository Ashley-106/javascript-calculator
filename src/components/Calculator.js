import React from 'react';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inPlay: '',
            result: ''
        }
    }

    handleBtn = (i) => {
        this.setState({
            inPlay: this.state.inPlay + i
        });
    }

    handleCalc = () => {
        const equation = eval(this.state.inPlay );
        console.log(eval(equation));
        this.setState({
            result: equation,
            inPlay: ''
        })
    }

    handleClear = () => {
        this.setState({
            inPlay: '',
            result: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Javascript<br></br>Calculator</h1>
                <div className="calculator">
                    <div className="display">
                        <p className="in-play">{this.state.inPlay}</p>
                        <p className="result">{this.state.result}</p>
                    </div>
                    

                    <div className="btn" onClick={() => {this.handleBtn(7)}}>7</div>
                    <div className="btn" onClick={() => {this.handleBtn(8)}}>8</div>
                    <div className="btn" onClick={() => {this.handleBtn(9)}}>9</div>
                    <div className="btn op" onClick={() => {this.handleBtn("/")}}>÷</div>

                    <div className="btn" onClick={() => {this.handleBtn(4)}}>4</div>
                    <div className="btn" onClick={() => {this.handleBtn(5)}}>5</div>
                    <div className="btn" onClick={() => {this.handleBtn(6)}}>6</div>
                    <div className="btn op" onClick={() => {this.handleBtn("*")}}>×</div>

                    <div className="btn" onClick={() => {this.handleBtn(1)}}>1</div>
                    <div className="btn" onClick={() => {this.handleBtn(2)}}>2</div>
                    <div className="btn" onClick={() => {this.handleBtn(3)}}>3</div>
                    <div className="btn op" onClick={() => {this.handleBtn("-")}}>-</div>
                    
                    <div className="btn" onClick={() => {this.handleBtn(0)}}>0</div>
                    <div className="btn op" onClick={() => {this.handleBtn(".")}}>.</div>
                    <div className="btn op" onClick={() => {this.handleCalc("=")}}>=</div>
                    <div className="btn op" onClick={() => {this.handleBtn("+")}}>+</div>

                    <div className="btn op" onClick={() => {this.handleClear()}}>CE</div>
                </div>
            </div>
                
        );
    }
    
};

export default Calculator;