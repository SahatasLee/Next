"use client"

import React, { useState } from 'react'
import Navlink from './navLink/Navlink'
import styles from './Links.module.css'

interface Link {
    title: string;
    path: string;
}

const links: Link[] = [
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
    }
]

const Links = () => {
    const [open, setOpen] = useState(false);

    // Temporary
    const session = true;
    const isAdmin = true;

    return (
        <div>
            <div className={styles.links}>
                {
                    links.map((
                        link => (<Navlink item={link} key={link.title} />)
                    ))
                }
                {
                    session ? (
                        <>
                            {isAdmin && <Navlink item={{ title: 'Admin', path: '/admin' }} />}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <Navlink item={{ title: 'Login', path: '/login' }} />
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {
                            links.map((link) => <Navlink item={link} key={link.title} />)
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Links