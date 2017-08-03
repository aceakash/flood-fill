import React from 'react'
import _ from 'lodash'
import Board from './Board.jsx'
import NextColorSelector from './NextColorSelector.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.palette = ['red', 'blue', 'orange', 'yellow']
    this.state = {
      cells: getInitialCells(this.palette),
      floodedPositions: [{row: 0, col: 0}] 
    }
    this.floodColor = 'black'
  }

  onNextColorSelected(nextColor) {
    const positionsToFlood = getPositionsToFlood(this.state.cells, this.state.floodedPositions, nextColor)
    const newCells = flood(this.state.cells, positionsToFlood, this.floodColor)
    this.setState({
      cells: newCells,
      floodedPositions: getFloodedCells(newCells, this.floodColor)
    })
  }

  render() {
    return (
      <div className="app">
        <Board cells={this.state.cells}/>
        <hr/>
        <NextColorSelector
          palette={this.palette}
          onNextColorSelected={this.onNextColorSelected.bind(this)}/>
      </div>
    )
  }
}

function flood(cells, positionsToFlood, floodColor) {
  positionsToFlood.forEach(pos => cells[pos.row][pos.col].color = floodColor)
  return cells
}

function getFloodedCells(cells, floodColor) {
  return _
    .flatten(cells)
    .filter(cell => cell.color === floodColor)
}

function getPositionsToFlood(cells, floodedCells, nextColor) {
  const positionsToFlood = []
  floodedCells.forEach(fc => {
    getNeighbouringPositions(cells.length, fc.row, fc.col).forEach(pos => {
      const cell = cells[pos.row][pos.col]
      if (cell.color === nextColor) {
        positionsToFlood.push(pos)
      }
    })
  })
  return positionsToFlood
}

function getInitialCells(palette) {
  const size = 11
  const rows = _
    .range(size)
    .map(row => {
      return _
        .range(size)
        .map(col => createCell(row, col, _.sample(palette), false))
    })
  rows[0][0].color = 'black'
  return rows
}

function createCell(row, col, color, isFlooded) {
  return {row: row, col: col, color: color, isFlooded: isFlooded};
}

function getNeighbouringPositions(squareSize, row, col) {
  const potentials = [
    {
      row: row - 1,
      col: col
    }, {
      row: row,
      col: col + 1
    }, {
      row: row + 1,
      col: col
    }, {
      row: row,
      col: col - 1
    }
  ];

  return potentials.filter(x => isInRange(squareSize, x.row, x.col))

  function isInRange(squareSize, row, col) {
    return row >= 0 && row < squareSize && col >= 0 && col < squareSize
  }
}