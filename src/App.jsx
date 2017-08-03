import React from 'react'
import _ from 'lodash'
import Board from './Board.jsx'
import NextColorSelector from './NextColorSelector.jsx'


export default class App extends React.Component {
  constructor() {
    super()
    this.palette = ['red', 'blue', 'orange', 'yellow']
    this.state = {
      colorGrid: getColorGrid(this.palette)
    }
    
  }

  render() {
    return (
      <div className="app">
        <Board colorGrid={this.state.colorGrid}/>
        <hr />
        <NextColorSelector palette={this.palette}/>
      </div>
    )
  }
}

function getColorGrid(palette) {
  const size = 11
  

  const rows = _
    .range(size)
    .map(rowIndex => {
      return _
        .range(size)
        .map(i => _.sample(palette))
    })

  return rows
}
