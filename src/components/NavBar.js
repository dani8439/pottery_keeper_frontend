import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav className="topnav">
            <div className="container">
                <Link to='/'>Home</Link>
                <NavLink to='/collections'>Collections</NavLink>
                <NavLink to='/collections/new'>Add Collection</NavLink>
                <NavLink to='/pieces/new'>Add Piece</NavLink>
            
             

            </div>
        </nav>
    )

}

export default NavBar