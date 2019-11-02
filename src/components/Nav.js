import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Link to='/'>Home</Link>
    )
}

const About = () => {
    return (
        <Link to='/about'>About</Link>
    )
}

const Contact = () => {
    return (
        <Link to='contact'>Contact</Link>
    )
}

const Blog = () => {
    return (
        <Link to='blog.mattox.space'>Blog</Link>
    )
}

const HomeA = () => {
    return (
        <Link to='/' className='active'>Home</Link>
    )
}

const AboutA = () => {
    return (
        <Link to='/about' className='active'>About</Link>
    )
}

const ContactA = () => {
    return (
        <Link to='/contact' className='active'>Contact</Link>
    )
}

class Nav extends Component {
    render() {
        const { active } = this.props
        switch (active)
        {
            case '1':
                return (
                    <div className='navbar'>
                        <HomeA />
                        <About />
                        <Contact />
                        <Blog />
                    </div>
                )
            case '2':
                return (
                    <div className='navbar'>
                        <Home />
                        <AboutA />
                        <Contact />
                        <Blog />
                    </div>
                )
            case '3':
                return (
                    <div className='navbar'>
                        <Home />
                        <About />
                        <ContactA />
                        <Blog />
                    </div>
                )
            default:
                return (
                    <div className='navbar'>
                        <HomeA />
                        <About />
                        <Contact />
                        <Blog />
                    </div>
                )

        }
    }
}

export default Nav