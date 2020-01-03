import React, { Component } from 'react'
import axios from 'axios'

class BountiesList extends Component {
    componentDidMount(){
        axios.get('/bounties').then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>hello</div>
        )
    }
}

export default BountiesList