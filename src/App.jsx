import React from 'react'
import Board from './Board.jsx'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app">
        <Board sideLength={2} />
        
      </div>
    )
  }
}

export default App