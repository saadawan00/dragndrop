import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    files: []
  }
    inputRef = React.createRef();
    onDrag = (e) => {
      e.preventDefault(); 
    // console.log("e allowdrop", e)

    }

    onDrop = (e) => {
      e.preventDefault(); 
      e.stopPropagation();
      // console.log('ref', this.inputRef)
    console.log("e drop data", e.dataTransfer)
    console.log("e drop", e.target)
    }

    handleChange = (e) => {
      console.log("files", e.target.files)
    }

    render(){
      return (
        <div className="App">
        <div  className="App-header"  onDrop={this.onDrop} onDragOver={this.onDrag}  >
          div 1
          <input type="hidden" id="input" style={{width: "100%", height: "100%"}} accept=".png,.jpg" onChange={this.handleChange} multiple aria-label="upload images" />

        </div>  

        <div id="2" className="App-header">
          div 2
        </div>
        </div>
      );
    }
}

export default App;
