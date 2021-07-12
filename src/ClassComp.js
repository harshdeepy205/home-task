import { Grid } from '@material-ui/core';
import React, { Component } from 'react'

class ClassComp extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState = {
            message: 'Thanku for sub'
        }
    }

    render() {
        return (
            <div>
                <h1>Hello{this.state.message}</h1>
                {/* <input /> */}
                <button style={{ display: "grid" }} onClick={() => this.changeMessage()}>Sub</button>
            </div>
        )
    }
}

export default ClassComp;