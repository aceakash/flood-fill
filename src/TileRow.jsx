import React from 'react'
import Tile from './Tile.jsx'
import hat from 'hat'
// import _ from 'lodash'


export default function (props) {
    const colors = props.colors
    console.log('in tilerow', colors)
    const tiles = colors.map(color => <Tile color={color} key={hat()}/>)

    return (
        <div className="tileRow">
            {tiles}
        </div>
    )
}

