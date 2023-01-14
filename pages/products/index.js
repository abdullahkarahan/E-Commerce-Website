import React from 'react'
import styles from '../../styles/Products.module.css'
import Image from 'next/image'
import axios from 'axios'

const Products = ({ pizza }) => {
  return (
    <div className={styles.container}>
      {pizza.map((item) => (
        <div key={item._id} className={styles.itemContainer}>
          <Image src={item.img} alt="" width="500" height="500" />
          <h3 className={styles.title}>{item.title}</h3>

          <p className={styles.desc}>{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ''
  let admin = false

  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }
  const res = await axios.get(
    'https://e-commerce-website-one-pearl.vercel.app/api/products'
  )
  console.log(res)

  return {
    props: { pizza: res.data },
  }
}
export default Products
