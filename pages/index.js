import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import PizzaList from '../components/PizzaList'
import axios from 'axios'
import { useState } from 'react'
import AddButton from '../components/AddButton'
import Add from '../components/Add'

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Gourmet Pizza</title>
        <meta name="description" content="Best pizza restaurant in Turkey" />
      </Head>
      <Featured />

      {admin && <AddButton setClose={setClose} />}

      <PizzaList pizzaList={pizzaList} />

      {!close && <Add setClose={setClose} />}
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

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  }
}
