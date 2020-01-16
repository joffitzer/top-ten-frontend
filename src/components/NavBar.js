import React from 'react';
import { Link } from 'react-router-dom' 

const NavBar = () => {
    return(
        <div>
            I am ze NavBar.
            <br></br>
            <Link to='/signup'>Sign Up</Link>
            <br></br>
            <Link to='/login'>Log In</Link>
            <br></br>
            <Link to='/home'>Home</Link>
            <br></br>
            <Link to='/profiles'>All Profiles</Link>
            <br></br>
            <Link to='/profiles/1'>My Profile</Link>
            <br></br>
            <Link to='/profiles/1/list/new'>Create New List</Link>
            <br></br>
        </div>
    )
}

export default NavBar;