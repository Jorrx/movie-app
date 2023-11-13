import React, { Children, useState } from 'react'
import styles from './MyModal.module.scss'

interface IProps {
    visible: boolean
    children: React.ReactNode
    setVisible:any
}

const MyModal = ({ children, visible = false, setVisible, ...props }: IProps) => {

    return (
        <div {...props} className={styles.myModal} onClick={()=>setVisible(false)}>
            {children}
        </div>
    )

}

export default MyModal
