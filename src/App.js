import React, { Component } from 'react'
import './App.css'
import Tier1 from './Tier1.js'

class App extends Component {
  render() {
    return (
      <div className="App">
<div onClick={updateColors.bind(this)} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
        <Tier2 handleChildClick={updateChildColors.bind(this)} color={this.state.childColor} />
</div>
    )
  }
}

export default App
