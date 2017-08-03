import React from 'react'

export default class Tile extends React.Component {

    render() {
        const style = {
            width: "30px",
            height: "30px",
            backgroundColor: this.props.color,
            margin: '1px'
        }
        return (
            <div
                className="tile"
                style={style}></div>
        )
    }
}
