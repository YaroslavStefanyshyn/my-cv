import React from 'react';
import s from './about.module.css'

const About = () => {
    return (
        <div className={s.about}>
            <h3>Some words about myself.</h3>
            <p>Hello, I am Yaroslav. And I'm a student of Lviv Polytechnic National University.
                I am studying in the 4th year at the faculty of Computer Engineering.
            </p>
            <span>I would like to tell you about my hobbies. I really like sports.
                I go to the gym, play football, swim a lot. But most of all I'm crazy about the computer.
                That's why I started studying programming</span>
            <p>Once a week, I go to extra classes from English</p>
            <p>I am friendly and inquisitive, I like to learn something new. If I don't know something, I will definitely find it on the Internet</p>
        </div>
    )
}

export default About;