import React from 'react'

export default class Tile extends React.Component {
  render() {
    return (
        <div className="tile">
            I am a tile of type {this.props.type}
        </div>
    )
  }
}

