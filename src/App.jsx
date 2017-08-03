import React from 'react'
import _ from 'lodash'
import Board from './Board.jsx'
import NextColorSelector from './NextColorSelector.jsx'


export default class App extends React.Component {
  constructor() {
    super()
    this.palette = ['red', 'blue', 'orange', 'yellow']
    this.state = {
      cells: getInitialCells(this.palette)
    }
    this.floodColor = this.state.cells[0][0].color
    console.log(this.floodColor)
    
  }

  onNextColorSelected(e) {
    console.log('BOO!', e)
  }

  render() {
    return (
      <div className="app">
        <Board cells={this.state.cells}/>
        <hr />
        <NextColorSelector palette={this.palette} onNextColorSelected={this.onNextColorSelected} />
      </div>
    )
  }
}

// function getColorGrid(palette) {
//   const size = 11
  

//   const rows = _
//     .range(size)
//     .map(rowIndex => {
//       return _
//         .range(size)
//         .map(i => _.sample(palette))
//     })

//   return rows
// }

function getInitialCells(palette) {
  const size = 11
  const rows = _
    .range(size)
    .map(row => {
      return _
        .range(size)
        .map(col => createCell(row, col, _.sample(palette), false))
    })
  rows[0][0].isFlooded = true  
  return rows
}


function createCell(row, col, color, isFlooded) {
  return {
    row: row,
    col: col,
    color: color,
    isFlooded: isFlooded
  };
}