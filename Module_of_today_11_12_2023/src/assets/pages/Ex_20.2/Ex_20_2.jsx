import React, { Component } from "react";
import "./EX_20_2.css";
export default class Ex_20_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ],
    };
  }
  handleClick = (toDo, index) => {
    if (toDo === this.state.data[index].completed && toDo == false) {
      this.setState((prev) => ({
        [this.state.data[index]]: (prev.data[index].completed = !false),
      }));
    }
    if (toDo === this.state.data[index].completed && toDo == true) {
      this.setState((prev) => ({
        [this.state.data[index]]: (prev.data[index].completed = !true),
      }));
    }
  };
  render() {
    const { data } = this.state;
    return (
      <div className="Ex">
        <div className="Ex_20_2">
          <h1>Ex_20_2</h1>
          <ul>
            {data.map((toDo, index) => {
              return (
                <li
                  key={index}
                  onClick={() => this.handleClick(toDo.completed, index)}
                  className={toDo.completed ? "complete" : null}
                >
                  {toDo.name} {toDo.completed ? "V" : "X"}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
