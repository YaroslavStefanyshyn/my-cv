import React from 'react';
import s from './header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.img}>
                <img src="https://englishfull.ru/wp-content/uploads/2014/03/%D0%A0%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5.jpg" alt="" />
                <h1>Yaroslav's CV</h1>
            </div>
        </div>
    )
}

export default Header;