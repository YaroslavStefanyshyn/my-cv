import React from 'react';
import s from './smthAboutMe.module.css';
import img from '../img/me.JPG'

const SmthAboutMe = () => {
    return (
        <div className={s.imgMy}>
            <img src={img} alt="myFoto" />
            <div>
                <h2>Yaroslav Stefanyshyn</h2>
                <span>Date of Birthday: 01.02.2001</span>
                <p>Age: 20</p>
                <p>City: Lviv</p>
                <span>University: Lviv Polytechnic National University</span>
                <p>Languages: English(intermediate), German and Polish(elementary)</p>
                <p>Phone: +380966201819</p>
            </div>
        </div>
    )
}

export default SmthAboutMe;