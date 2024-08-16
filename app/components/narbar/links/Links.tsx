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
        // {
        //     title: 'Login',
        //     path: '/login',
        // }
    ]

    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.links}>
            {
                links.map((
                    link => (<Navlink item={link} key={link.title}/>)
                ))
            }
            {
                session ? (
                    <>
                    {isAdmin && <Navlink item={{title: 'Admin', path: '/admin' }} />}
                    <button>Logout</button>
                    </>
                ) : (
                    <Navlink item={{title: 'Login', path: '/login'}} />
                )
            }
        </div>
    )
}

export default Links