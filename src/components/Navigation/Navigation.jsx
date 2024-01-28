import React from 'react'
import styles from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
    <div>
        <img src="/images/JC.png" width="60px" alt="JC logo" />
    </div>
    <ul>
        <li>Home</li> 
        <li>About</li>
        <li>Contact</li>
    </ul>
      
    </nav>
  )
}

export default Navigation
