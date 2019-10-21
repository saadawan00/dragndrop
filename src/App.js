import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  state = {
    files: []
  };
  inputRef = React.createRef();
  onDrag = e => {
    e.preventDefault();
    // console.log("e allowdrop", e)
  };

  onDrop = e => {
    e.preventDefault();
    var arr = [];
    arr.push(e.dataTransfer.files[0]);
    this.setState(
      {
        files: [...this.state.files, e.dataTransfer.files[0]]
        // state.files.concat(e.dataTransfer.files[0]);
      },
      () => {
        console.log("files", this.state.files);
      }
    );
  };

  handleChange = e => {
    console.log("files", e.target.files);
  };

  render() {
    return (
      <div className="App">
        <div
          id="drop"
          className="App-header"
          onDrop={this.onDrop}
          onDragOver={this.onDrag}
        >
          div 1
          {/* <input type="hidden" id="input" style={{width: "100%", height: "100%"}} accept=".png,.jpg" onChange={this.handleChange} multiple aria-label="upload images" /> */}
          {/* {this.state.files.map(item => (
            <li key={item}>{item}</li>
          ))} */}
        </div>

        <div id="2" className="App-header">
          div 2
        </div>
      </div>
    );
  }
}

export default App;
