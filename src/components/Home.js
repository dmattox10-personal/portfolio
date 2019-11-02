import React, { Component } from 'react'

import Nav from './Nav'
import Animation from './Animation'

class Home extends Component {
    render() {
        return (
            <div>
                <header></header>
                <Animation />
                <Nav active='1' />
            </div>
        )
    }
}

export default Home