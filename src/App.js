import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import marked from "marked";

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
      <div style={{ display:"flex", flexDirection:"column", backgroundColor: "#bada55" }}>
        <h1 style={{ width: "40%", margin: "0.1rem auto" }}>
          Rashad MARKDOWN Engine
        </h1>
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
              <h4>Please Type in your MARKDOWN code here</h4>
              <textarea
                style={{ padding: "1rem", height: "50rem" }}
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
              <div
                dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  height: "50rem",
                  border: "3px solid black",
                }}
              ></div>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
