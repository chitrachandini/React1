import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper black">
            <div className="container" >
            <Link to ='/'>Movie Posters</Link>
                <ul className="right">
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to = '/AboutUs'>AboutUs</Link></li>
                   <li><Link to = '/Download'>Download</Link></li>
                   <li><Link to = '/ContactUs'>ContactUs</Link></li>
                   <li><Link to = '/Feedback'>Feedback</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;