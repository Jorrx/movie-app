import React from 'react';
import styles from './MyLoader.module.scss'

const MyLoader = () => {

    return (
        <div className={styles.center}>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default MyLoader;