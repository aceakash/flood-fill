import React from 'react'
import Tile from './Tile.jsx'
import hat from 'hat'

export default function (props) {
    const tiles = props.cells.map(cell => <Tile color={cell.color} key={hat()}/>)

    return (
        <div className="tileRow">{tiles}</div>
    )
}

