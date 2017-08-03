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
    tiles.push(<Tile x={0} y={0} type="ground" />)
    tiles.push(<Tile x={0} y={1} type="ground" />)
    tiles.push(<Tile x={1} y={0} type="ground" />)
    tiles.push(<Tile x={1} y={1} type="ground" />)
    tiles.push(<Tile x={1} y={2} type="ground" />)
    tiles.push(<Tile x={2} y={0} type="ground" />)
    tiles.push(<Tile x={2} y={1} type="ground" />)
    return tiles
  }


  render() {
    return (
        <div className="board">
            {this.tiles}
        </div>
    )
  }
}
