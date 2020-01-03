import React from 'react'


function Square(props) {
    const styles = {
        backgroundColor: props.color,
        border: "solid black 2px"

    }
    return (
        <div style={styles}></div>
    )
}

export default Square
