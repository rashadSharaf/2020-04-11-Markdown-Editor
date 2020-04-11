import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
let marked = require("marked")



export default class App extends Component {
  constructor(props) {
    super(props);
    //initial state values
    this.state = {
      input: "",
    };
  }

  updateInput = (ev) => {
    let input = ev.target.value;
    this.setState({ input });
    console.log(this.state.input);
  };

  render() {

    return (
      <div>
        <HashRouter basename="/">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                height: "100vh",
                margin: "1rem",
              }}
            >
              <label>Please Type in your code here</label>
              <textarea
                rows="50"
                style={{ padding: "1rem" }}
                value={this.state.input}
                onChange={this.updateInput}
              />
            </form>
            <div
              style={{
                display: "flex",
                margin: "1rem",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <h4> HTML OUTPUT </h4>
              <div dangerouslySetInnerHTML = {{__html: marked(this.state.input)}}  style={{padding:"1rem", height: "100vh", border: "3px solid black" }}>
                
              </div>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
