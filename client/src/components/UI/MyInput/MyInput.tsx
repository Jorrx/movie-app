import React from 'react'
import styles from './MyInput.module.css'

export type MyInputProps =  React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<any>

const MyInput = ({...props}:MyInputProps) => {




  return (
    <input {...props} className={styles.myInput}/>
  )

}

export default MyInput
