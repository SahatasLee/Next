import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>
            <p>&copy; {new Date().getFullYear()} Sahatas, Inc. All rights reserved.</p>
            {/* <nav className={styles.nav}>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/privacy">Privacy Policy</a>
            </nav> */}
        </div>
    </footer>
  )
}

export default Footer