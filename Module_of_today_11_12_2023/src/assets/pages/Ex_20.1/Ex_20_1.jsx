import React, { Component } from "react";
import "./Ex_20_1.css";
export default class Ex_20_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(prevCount){
    if(this.state.count >10){
     this.setState({count: 10})
    }
    if(this.state.count <-10){
      this.setState({count: -10})
    }
  }
  handlePlus = () => {
    
    this.setState((prevCount) => ({
     
      count: prevCount.count + 1,
    }));
  };
  handleMinus = () => {
    this.setState((prevCount) => ({
      count: prevCount.count - 1,
    }));
  };

  
  render() {
    const { count } = this.state;
    return (
      <div className="Ex">
        <div className="page">
          <h1>Ex_20_1</h1>
          <div className="content-container">
            <button onClick={this.handlePlus} className="plus">
              Plus
            </button>
            <div className={count>0 ? 'green' : count==0 ? 'black' : 'red'}>{count} </div>
            <button onClick={this.handleMinus} className="minus">
              Minus
            </button>
          </div>
        </div>
      </div>
    );
  }
}
