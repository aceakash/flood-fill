import React from 'react'

var logic = {}

logic.messages = {
  high: "Too High 😔",
  low: "Too Low 😔",
  correct: "Perfect 😃",
  none: ""
}

logic.getMessage = function (secret, guess, messages) {
  if (guess === secret) return messages.correct;
  if (guess > secret) return messages.high;
  if (guess < secret) return messages.low;
  if (guess === null) return messages.none;
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      number: 1 + Math.floor(Math.random() * 100),
      message: logic.getMessage(logic.messages.none)
    }
    console.log('num:', this.state.number)
  }

  onGuess() {
    const guess = ~~this.refs.input.value || null

    if (guess === 0) {
      this.setState({message: ""})
      return
    }

    if (guess > this.state.number) {
      this.setState({message: "Too high!"})
      return
    }
    if (guess < this.state.number) {
      this.setState({message: "Too low!"})
      return
    }
    if (guess === this.state.number) {
      this.setState({message: "Perfect!"})
      return
    }
  }

  render() {
    return (
      <div>
        <p>Hello, I have a number in mind (between 1 and 100, both included).</p>
        <p>Can you guess it?</p>
        <p>
          <input type="text" ref="input" placeholder="Your guess" autoFocus/>
          <button onClick={this
            .onGuess
            .bind(this)}>Submit</button>
        </p>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

export default App