import React from 'react';
import styles from './NotFound.module.css';

import notFound from './../../images/404.png';

export default function NotFound() {
    return (
        <div className={styles.center}>
            <img src={notFound} alt=""/>
        </div>
    )
}
