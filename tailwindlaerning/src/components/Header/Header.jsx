import React from 'react'
import styles from './Head.module.css'
function Header() {
  return (
    <div className={styles.head}>
        <h3>Sheriyan</h3>

        <button className={styles.head}>Login</button>
    </div>
  )
}

export default Header
