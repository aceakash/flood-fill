import React from 'react'
import Tile from './Tile.jsx'
import hat from 'hat'

export default class Board extends React.Component {
  constructor() {
    super()
    this.tiles = this.createTilesRow(3)
  }

  // returns a board with tiles
  createTilesRow(num) {
    const tiles = []
    for (var j = 0; j < num; j++) {    
        tiles.push(this.createSingleTile('red'))
    }
    return tiles
}

  createSingleTile(color) {
      return (<Tile color={color} key={hat()} />)
  }


  render() {
    return (
        <div className="board">
            {this.tiles}
        </div>
    )
  }
}
