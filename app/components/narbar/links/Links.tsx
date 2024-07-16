import React from 'react'
import Link from 'next/link'

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
    ]

  return (
    <div>
        {
            links.map(
                (
                    link=>(
                        <Link href={link.path}></Link>
                    )
                )
            )
        }
    </div>
  )
}

export default Links