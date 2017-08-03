import React from 'react'
import Tile from './Tile.jsx'
import hat from 'hat'
// import _ from 'lodash'


export default function (props) {
    const cells = props.cells
    const tiles = cells.map(cell => <Tile color={cell.color} key={hat()}/>)

    return (
        <div className="tileRow">
            {tiles}
        </div>
    )
}

