import React from 'react'
import Tile from './Tile.jsx'
import hat from 'hat'
// import _ from 'lodash'


export default function (props) {
    const palette = props.palette
    const tiles = palette.map(color => <Tile color={color} key={hat()}/>)

    return (
        <div className="nextColorSelector">
            {tiles}
        </div>
    )
}

