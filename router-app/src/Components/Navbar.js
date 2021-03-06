/*import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
    <nav className='nav-wrapper blue darken-4'>
      <div className='container'>
      <Link to='/'>Logo</Link>
      <ul className='right'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
        <li><Link to='/employeedata'>Employee Data</Link></li>
      </ul>
      </div>
    </nav>
    )
}

export default Navbar;*/
import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const Navbar = (props) =>{
  /*setTimeout(() => {
    props.history.push('./contactus');
  },4000);

  function setTime(){
    props.history.push('./contactus');
  }

setTimeout(setTime, 4000);*/
    return(
    <nav className='nav-wrapper blue darken-4'>
      <div className='container'>
      <Link to='/'>Logo</Link>
      <ul className='right'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contactus'>Contact Us</Link></li>
       {/*  <li><Link to='/employeedata'>Employee Data</Link></li> */}
       <li><Link to='/dummydata'>Dummy Data</Link></li>
      </ul>
      </div>
    </nav>
    )
}

export default withRouter(Navbar);