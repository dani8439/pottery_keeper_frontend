import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav className="topnav">
            <div className="container">
                <Link to='/'>Home</Link>
                <ul className="right">
                    <li><NavLink to='/collections'>Collections</NavLink></li>
                    <li><NavLink to='/collections/new'>Add Collection</NavLink></li>
                    <li><NavLink to='/pieces/new'>Add Piece</NavLink></li>
                </ul>
             

            </div>
        </nav>
    )

}

export default NavBar