import React from 'react';
import logo from '../../res/logo.png';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar row'>
            <NavLink to='/' exact={true} className='navbar__link'>
                <img src={logo} alt='pokemon logo' className='logo'/>
            </NavLink>

            <NavLink to='/Cards' exact={true} activeClassName='navbar__link--active' className='navbar__link transition'>Cards</NavLink>

            <NavLink to='/Sets' exact={true} activeClassName='navbar__link--active' className='navbar__link transition'>Sets</NavLink>

            <NavLink to='/Types' exact={true} activeClassName='navbar__link--active' className='navbar__link transition'>Types</NavLink>
        </nav>
    )
}

export default Navbar;