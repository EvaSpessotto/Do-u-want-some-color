import React, { Component } from 'react';
import './App.css';
import Circle from './components/Circle';
import SwitchButton from './components/SwitchButton';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isChecked: false
    }
  }

  render() {
    return (
      <div className="App">
        <Circle/>
        <SwitchButton/>
      </div>
    );
  }
}

export default App;
