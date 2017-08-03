import React from 'react'
import hat from 'hat'
import _ from 'lodash'
import TileRow from './TileRow.jsx'

export default function (props) {
    const tileRows = _
        .range(props.cells.length)
        .map(rowIndex => (<TileRow cells={props.cells[rowIndex]} key={hat()}/>))

    return (
        <div className="board">{tileRows}</div>
    )
}