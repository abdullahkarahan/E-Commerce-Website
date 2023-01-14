import React from 'react'

import PizzaCard from './PizzaCard'
import styles from '../styles/PizzaList.module.css'

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BEST PIZZA IN TURKEY</h1>
      <p className={styles.desc}>The most delicious handmade pizza in Turkey</p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  )
}

export default PizzaList
