import React from 'react'
import Board from './Board.jsx'
// import _ from 'lodash'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colorGrid: getColorGrid()
    }
  }
  
  render() {
    return (
      <div className="app">
        <Board colorGrid={this.state.colorGrid} />
      </div>
    )
  }
}

function getColorGrid() {
  return [
    ['red', 'blue'],
    ['yellow', 'orange']
  ]
}
