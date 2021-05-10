import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/'>Home</Link>
                <Link to='/collections'>Collections</Link>
                <Link to='/collections/new'>Add Collection</Link>

            </div>
        </nav>
    )
    // <div>
    //     <Link to='/collections'>Collections</Link>
    //     <Link to='/collections/new'>Add Collection</Link>
    //     {/* <Link to='/' */}
    // </div>

}

export default NavBar