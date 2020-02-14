import React, { Component } from 'react'
import '../App.css'

class App extends Component {
  state = {
    counter: 0,
    showError: false,
  }

  handleIncrement = () => {
    const { counter } = this.state
    this.setState({ counter: counter + 1, showError: false })
  }

  handleDecrement = () => {
    const { counter } = this.state

    if (counter === 0) {
      this.setState({ showError: true })
      return
    }
    this.setState({ counter: counter - 1 })
  }

  render() {
    const { counter, showError } = this.state

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
        {showError && (
          <h3 data-test="error-message">The counter can't go below zero!</h3>
        )}
      </div>
    )
  }
}

export default App
