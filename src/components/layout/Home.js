import React from 'react'
import styles from "./Home.module.css"

import Register from '../Auth/Register'
import ImageContainer from '../image/ImageContainer'

const Home = () => {
  return (
    <div className={styles.main_container_home}>
      <div className={styles.logout_container}>
        <Register />
      </div>
      <div className={styles.image_container}><ImageContainer /></div>     
    </div>
  )
}

export default Home
