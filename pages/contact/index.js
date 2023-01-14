import React from 'react'
import styles from '../../styles/Contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h4 className={styles.title}>FOLLOW US</h4>
          <div className={styles.icons}>
            <span className={styles.icon}>
              <Image src="/img/instagram.png" alt="" width="30" height="30" />
            </span>
            <span>
              <Image src="/img/facebook.png" alt="" width="30" height="30" />
            </span>
          </div>
        </div>
        <div className={styles.card}>
          <h4 className={styles.title}>FIND OUR RESTAURANTS</h4>
          <p className={styles.text}>
            Beykoz
            <br /> Istanbul
            <br /> 216 1234567
          </p>
          <p className={styles.text}>
            Kadikoy
            <br /> Istanbul
            <br /> 216 1234567
          </p>
          <p className={styles.text}>
            Nisantasi
            <br /> Istanbul
            <br /> 212 1234567
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

export default Contact
