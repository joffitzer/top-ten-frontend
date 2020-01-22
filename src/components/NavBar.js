import React from 'react';
import { Link } from 'react-router-dom' 
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const NavBar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href='/home'>ListMaker</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href='/profiles/1'>My Profile</Nav.Link>
            <Nav.Link href='/profiles'>Profiles</Nav.Link>
            </Nav>
            <Button href='/profiles/1/list/new' variant="light">Create List</Button>
        </Navbar>

    )
}

export default NavBar;

        // <div>
        //     I am ze NavBar.
        //     <br></br>
        //     <Link to='/signup'>Sign Up</Link>
        //     <br></br>
        //     <Link to='/login'>Log In</Link>
        //     <br></br>
        //     <Link to='/home'>Home</Link>
        //     <br></br>
        //     <Link to='/profiles'>All Profiles</Link>
        //     <br></br>
        //     <Link to='/profiles/1'>My Profile</Link>
        //     <br></br>
        //     <Link to='/profiles/1/list/new'>Create New List</Link>
        //     <br></br>
        // </div>