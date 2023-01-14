import React from 'react'
import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Image src={pizza.img} alt="" width="500" height="500" />

      <h3 className={styles.title}>{pizza.title}</h3>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
      <Link href={`/product/${pizza._id}`} passHref>
        <button className={styles.button}>SELECT SIZE</button>
      </Link>
    </div>
  )
}

export default PizzaCard
