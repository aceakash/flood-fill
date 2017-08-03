import React from 'react'
import Tile from './Tile.jsx'

export default class Board extends React.Component {
  constructor() {
    super()
    this.tiles = this.createTiles(this)
  }

  // returns a board with tiles
  createTiles(sidelength) {
    const tiles = []
    tiles.push(this.createSingleTile(0, 0, 'ground'))
    tiles.push(this.createSingleTile(0, 1, 'ground'))
    tiles.push(this.createSingleTile(1, 0, 'lava'))
    tiles.push(this.createSingleTile(1, 1, 'ground'))
    tiles.push(this.createSingleTile(1, 2, 'ground'))
    tiles.push(this.createSingleTile(2, 0, 'ground'))
    tiles.push(this.createSingleTile(2, 1, 'ground'))
    return tiles
  }

  createSingleTile(x, y, type) {
      const key = `tile_${x}_${y}`
      return (<Tile x={x} y={y} type={type} key={key} />)
  }


  render() {
    return (
        <div className="board">
            {this.tiles}
        </div>
    )
  }
}
