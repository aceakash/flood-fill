import React from 'react'
import hat from 'hat'
import _ from 'lodash'
import TileRow from './TileRow.jsx'

export default function (props) {
    const cells = props.cells

    const tileRows = _
        .range(cells.length)
        .map(rowIndex => (<TileRow cells={cells[rowIndex]} key={hat()}/>))

    return (
        <div className="board">
            {tileRows}
        </div>
    )

}