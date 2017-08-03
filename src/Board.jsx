import React from 'react'
// import Tile from './Tile.jsx'
import TileRow from './TileRow.jsx'
import hat from 'hat'
import _ from 'lodash'

export default class Board extends React.Component {
    render() {
        const colorGrid = this.props.colorGrid    

        const tileRows = _.range(colorGrid.length)
            .map(rowIndex => (<TileRow colors={colorGrid[rowIndex]} key={hat()} />))
        console.log(tileRows)
        // const tileRows = _.range(this.props.size)
        //     .map(i => <TileRow tileColors />)    
        
        return (
            <div className="board">
                {tileRows}
            </div>
        )
    }
}

// function getRandomCssColor() {
//     return _.sample(['red', 'yellow', 'blue', 'green', 'orange', 'fuchsia'])
// }
