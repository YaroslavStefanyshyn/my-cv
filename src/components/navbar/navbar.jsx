import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeItem}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='about' activeClassName={s.activeItem}>About</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='skills' activeClassName={s.activeItem}>Skills</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='contacts' activeClassName={s.activeItem}>Contacts</NavLink>
            </div>
        </div>
    )
}

export default Navbar;