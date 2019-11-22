import React from 'react';
import './App.css';



class counterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter:0 }
  }
  CounterApp=() =>{
    this.setState({counter:this.state.counter +1})
  }
  CountApp=() =>{
    this.setState({counter:this.state.counter -1})
  }
  render() { 
    return  (
    
      <div className="App">
        <h1 id="answer ">{this.state.counter}</h1>
        <button id="button1" onClick={this.CounterApp}>+1</button>
        <button id="button2" onClick={this.CountApp}>-1</button>
      </div>);
  }
}
 
export default counterApp;

