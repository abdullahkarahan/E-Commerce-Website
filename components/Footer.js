import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          src="/img/main-logo.png"
          alt=""
          objectFit="contain"
          width="500"
          height="50"
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h3 className={styles.motto}>WELL BAKED,HANDMADE SLICE OF PIZZA</h3>
        </div>
        <div className={styles.card}>
          <h4 className={styles.title}>FIND OUR RESTAURANTS</h4>
          <p className={styles.text}>
            Beykoz
            <br /> Istanbul
            <br /> 216 1234567
          </p>
        </div>
        <div className={styles.card}>
          <h4 className={styles.title}>WORKING HOURS</h4>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY-SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
