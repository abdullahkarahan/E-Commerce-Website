import React from 'react'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

import { useSelector } from 'react-redux'
import Link from 'next/link'

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link href="/" passHref>
          <div className={styles.logo}>
            <Image
              src="/img/main-logo.png"
              alt=""
              width="270"
              height="90"
              priority
            />
          </div>
        </Link>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>HOME</li>
          </Link>
          <Link href="/products" passHref>
            <li className={styles.listItem}>PRODUCTS</li>
          </Link>
          <Link href="/contact" passHref>
            <li className={styles.listItem}>CONTACT</li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30" height="30" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>212 12345678</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
