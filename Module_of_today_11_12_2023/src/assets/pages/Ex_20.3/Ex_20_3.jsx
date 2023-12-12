import React, { Component } from "react";
import "./Ex_20_3.css";
export default class eX_20_3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s: "1",
      m: "1",
      h: "1",
    };
  }
  handleChange = (e) => {
    this.setState((prev) => ({
      s: prev.s,
      m: prev.m = e.target.value/60,
      h: prev.h = e.target.value/3600,
    }));
    if (e.target.value === 0) {
      this.setState((prev) => ({
        s: (prev.s = 0),
        m: (prev.s = 0),
        h: (prev.s = 0),
      }));
    }
  };

  render() {
    const { s, m, h } = this.state;
    return (
      <div className="Ex">
        <div className="Ex_20_3">
          <h1>Ex_20_3</h1>
          <ul className="time">
            <li>{s}s'</li>
            <li>{m}m'</li>
            <li>{h}h'</li>
          </ul>
          <ul className="inputs">
            <input
              type="number"
              placeholder="Seconds..."
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="number"
              placeholder="Minutes..."
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="number"
              placeholder="Houres...."
              onChange={(e) => this.handleChange(e)}
            />
          </ul>
        </div>
      </div>
    );
  }
}
