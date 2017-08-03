import React from 'react'
import Board from './Board.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Board size={21} />
        
      </div>
    )
  }
}

export default App