import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {
    //anything automatically goes to about in 2 seconds
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000)
    return(
        <nav className="nav-wrapper orange darken-3">
            <div className="container">
                <a href="#top" className="brand-logo">Duck Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

//we wrapped the Navbar using withRouter
//withRouter is a higher order component that is wrapping the component Navbar and applied it's props
//withRouter is basically supercharging a component
export default withRouter(Navbar);