import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    counter: 0,
  }

  handleIncrement = () => {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  handleDecrement = () => {
    const { counter } = this.state
    this.setState({ counter: counter - 1 })
  }

  render() {
    const { counter } = this.state

    return (
      <div className="App" data-test="app">
        <h1>Hello from app component!</h1>
        <h2 data-test="counter">The counter is on {counter}</h2>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button data-test="decrement-button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    )
  }
}

export default App
