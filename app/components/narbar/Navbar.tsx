import React from 'react'
import Link from 'next/link'
import styles from './Narbar.module.css'
import Links from './links/Links'

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>
      {/* <a href="/">Home</a> */}
      {/* <Link href="/">Home</Link> */}
      {/* <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link> */}
      <Links />
      <div className={styles.right}>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar