import React from 'react'
import styles from './ImageContainer.module.css'

const ImageContainer = () => {
  return (
    <div className={styles.image_container}>
      <div className={styles.main_image_container}>
        <img  src="https://cdn-images.mailchimp.com/billboards/phpfGSSUv.jpeg" alt="Lady With a Smile"/>
      </div>

      <div className={styles.content}>
        <h4 className={styles.content_header}>Big updates for small businesses</h4>
        <p className={styles.content_paragraph}>We've been busy innovating for you! View our latest product updates
to help you market smarter and grow faster.</p>
        <a href='https://mailchimp.com/fall2020/' className={styles.content_button}>See the Video</a>
      </div>
    </div>
  )
}

export default ImageContainer
