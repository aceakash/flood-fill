import React from 'react'
// import Tile from './Tile.jsx'
import TileRow from './TileRow.jsx'
import hat from 'hat'
import _ from 'lodash'

export default class Board extends React.Component {

    render() {
        const tileRows = _.range(this.props.size).map(i => <TileRow size={this.props.size} />)    
        return (
            <div className="board">
                {tileRows}
            </div>
        )
    }
}
