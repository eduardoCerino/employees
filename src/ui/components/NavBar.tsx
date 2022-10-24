import { NavLink } from 'react-router-dom'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../auth/context/AuthContext';

const NavBar = () => {
  const authcontext = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogout = () => {
      authcontext?.setLoggedIn(false);
      authcontext?.setUser("");
      localStorage.removeItem("user");
      navigate('/', {
          replace: true
      });
  }

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <ul className="navbar-collapse justify-content-between ">
        <div className="navbar-nav">
            <li className='nav-link scrollto'> <NavLink to="/employees" className="nav-item nav-link me-5"> Employees</NavLink> </li> 
            <li className='nav-link scrollto'> <NavLink to="/upload" className="nav-item nav-link me-5"> Upload</NavLink>   </li> 
            <li className='nav-link scrollto'><span className="nav-item nav-link text-primary me-5"> {authcontext?.user}</span></li>
            <li className='nav-link scrollto'> {(authcontext?.loggedIn) &&<button className="btn btn-outline-danger" onClick={onLogout}>Logout</button>}</li>
            <li className='nav-link scrollto'>{(!authcontext?.loggedIn) && <NavLink to="/login" className="btn btn-outline-success me-5">Login</NavLink>}</li>
        </div>
           
        </ul>
    </nav>
  )
}

export default NavBar