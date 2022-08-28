import React from 'react'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.maxWidth}>
            <div className={styles.left}>Left</div>
            <div className={styles.middle}>Middle</div>
            <div className={styles.right}>Right</div>
        </div>
    </div>
  )
}

export default Nav