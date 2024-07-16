import React from 'react'
import Link from 'next/link'
import styles from './Narbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
          <div className='Logo'>
            <Link href="/">Logo</Link>
          </div>
          <a href="/">Home</a>
          {/* <Link href="/">Home</Link> */}
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </div>
        <div className={styles.right}>
            <Link href="/login">Login</Link>
        </div>
    </nav>
  )
}

export default Navbar