import React from 'react'
import Link from 'next/link'
import styles from './Narbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <Link href="/">Logo</Link>
            <a href="/">Home</a>
        </div>
        {/* <Link href="/">Home</Link> */}
        <div className={styles.right}>
            <Link href="/login">Login</Link>
        </div>
    </nav>
  )
}

export default Navbar