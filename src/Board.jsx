import React from 'react'
import hat from 'hat'
import _ from 'lodash'
import TileRow from './TileRow.jsx'
import NextColorSelector from './NextColorSelector.jsx'

export default function (props) {
    const colorGrid = props.colorGrid

    const tileRows = _
        .range(colorGrid.length)
        .map(rowIndex => (<TileRow colors={colorGrid[rowIndex]} key={hat()}/>))

    return (
        <div className="board">
            {tileRows}
        </div>
    )

}