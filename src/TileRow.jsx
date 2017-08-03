import React from 'react'
import Tile from './Tile.jsx'
import hat from 'hat'
import _ from 'lodash'


export default function (props) {
    const tiles = _.range(props.size).map(i => <Tile color={'red'} key={hat()}/>)

    return (
        <div className="tileRow">
            {tiles}
        </div>
    )
}