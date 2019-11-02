import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from './Contact'

class Tupperware extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={ Home } />
                <Route exact path='/About' component={ About } />
                <Route exact path='/Contact' component={ Contact } />
            </Router>
        )
    }
}

export default Tupperware