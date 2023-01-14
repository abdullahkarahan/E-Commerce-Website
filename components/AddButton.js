import React from 'react'
import styles from '../styles/AddButton.module.css'

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.container}>
      <button onClick={() => setClose(false)} className={styles.mainAddButton}>
        Add New Pizza
      </button>
    </div>
  )
}

export default AddButton
