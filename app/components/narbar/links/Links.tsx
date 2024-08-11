import React from 'react'
import Navlink from './navLink/Navlink'
import styles from './Links.module.css'

const Links = () => {
    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Login',
            path: '/login',
        }
    ]

    return (
        <div className={styles.links}>
            {
                links.map((
                    link => (<Navlink item={link} key={link.title}/>)
                ))
            }
        </div>
    )
}

export default Links