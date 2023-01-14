import styles from '../../styles/Admin.module.css'
import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'

const Index = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products)
  const [orderList, setOrderList] = useState(orders)

  const status = ['preparing', 'on the way', 'delivere']

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0]

    const currentStatus = item.status

    try {
      const res = await axios.put(
        'https://e-commerce-website-one-pearl.vercel.app/api/orders/' + id,
        {
          status: currentStatus + 1,
        }
      )

      setOrderList([res.data, ...orderList.filter((order) => order._id !== id)])
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        'https://e-commerce-website-one-pearl.vercel.app/api/products/' + id
      )
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>

          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>

          <tbody>
            <tr className={styles.trTitle}>
              <td>{'216515151531531531'.slice(0, 5)}...</td>
              <td>John Doe</td>
              <td>$50</td>
              <td>paid</td>
              <td>preparing</td>
              <td>
                <button className={styles.nextStageBtn}>Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ''

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    }
  }
  const productRes = await axios.get(
    'https://e-commerce-website-one-pearl.vercel.app/api/products'
  )
  const orderRes = await axios.get(
    'https://e-commerce-website-one-pearl.vercel.app/api/orders'
  )

  return {
    props: {
      products: productRes.data,
      orders: orderRes.data,
    },
  }
}

export default Index
