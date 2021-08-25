import React from 'react';
import s from './contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.writeItems}>
                <h3>
                    Emails:
                </h3>
                <ul>
                    <li>mega_yarko2001@ukr.net</li>
                    <li>stefanyshynslavik@gmail.com</li>
                </ul>
                <div className={s.tlgrm}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1200px-Telegram_2019_Logo.svg.png"
                        alt="" />
                    <span>Telegram: +380966201819</span>
                </div>
                <div className={s.tlgrm}>
                    <img src="https://pngicon.ru/file/uploads/viber-1-256x256.png" alt="" />
                    <span>Viber: +380966201819</span>
                </div>
                <div className={s.tlgrm}>
                    <img src="https://i.pinimg.com/originals/93/24/5f/93245f242a7a9753c11253e49de25fc0.png" alt="" />
                    <span>Phone: +380966201819</span>
                </div>
            </div>
            <div className={s.items}>
                <div className={s.iconItem}>
                    <a href="https://www.instagram.com/slavik_s19/?hl=ru">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
                            alt="" />
                    </a>
                </div>
                <div className={s.iconItem}>
                    <a href="https://github.com/YaroslavStefanyshyn">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
                            alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacts;