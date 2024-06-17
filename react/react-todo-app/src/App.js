import React, {Component} from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        123
        <div className="todoBlock">
          <div>
            <h1>할 일 목록</h1>
          </div>

          <div>
            <input type="checkbox" defaultChecked={false} />
            공부하기
            <button style={this.btnStyle}>x</button>
          </div>
        </div>
      </div>
    )
  }
}