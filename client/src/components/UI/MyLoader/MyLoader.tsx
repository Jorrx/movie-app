import React, {memo} from 'react';
import styles from './MyLoader.module.scss'

const MyLoader = () => {

    return (
        <div className={styles.center}>
            <span className={styles.loader}>
               {/* <img src={logo} alt="loader" /> */}
            </span>
        </div>
    );
};

export default memo(MyLoader);