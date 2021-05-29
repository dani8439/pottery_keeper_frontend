import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <nav className="topnav">
            <div className="container">
                <Link to='/'>HOME</Link>
                <NavLink to='/collections'>COLLECTIONS</NavLink>
                <NavLink to='/collections/new'>ADD COLLECTION</NavLink>
            
             

            </div>
        </nav>
    )

}

export default NavBar