import React from 'react'

export default function (props) {
    const style = {
        width: "30px",
        height: "30px",
        backgroundColor: props.color
    }
    return (<div className="tile" style={style} onClick={makeOnClickHandler(props.update, props.color)} />)

    function makeOnClickHandler(handler, color) {
        if (typeof handler === 'function') {
            return handler.bind(null, color)
        }
        return null
    }
}
