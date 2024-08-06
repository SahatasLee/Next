"use client";

// import React from 'react';
import styles from './Navlink.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navlink = ({ item }) => {
    const pathName = usePathname();
    // const className = `${styles.container} ${pathName === item.path ? styles.active : ''}`;

    return (
        <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>{item.title}</Link>
    )

    // return (
    //     <div className={styles.containernavlink}>menu</div>
    // );

}

export default Navlink