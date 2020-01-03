import React, { Component } from 'react'
import Square from "./Square"

class Mixer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            colors: ["white", "white", "white", "white"]
        }
    }

    handleBlackWhite = () => {
        this.setState((prevState) => {
            if(prevState.colors[0] === "white"){
                return {colors: ["black", "black", "black", "black"]}
            } else {
                return {colors: ["white", "white", "white", "white"]}
            }
        })
    }

    render() {
        const styles = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "200px 200px",
        }
    
        const colors = this.state.colors.map(color => {
            return <Square color={color} />
        })

        return (
            <div>
                <div style={styles}>
                    { colors }
                </div>
                <button onClick={this.handleBlackWhite}>toggle black and white</button>
            </div>
        )
    }
}

export default Mixer