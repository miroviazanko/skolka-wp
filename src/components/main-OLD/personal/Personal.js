import React from 'react';

import styles from './Personal.module.scss';



export default function Personal() {
    return (
        <div className={styles.personalContainer}>
            <div className={styles.sew}>
                <div className={styles.textContainer}>
                    <h1 className={styles.header}>PERSONÁL</h1>
                    <p className={styles.text}>
                        Riaditelka: ...
                   </p>
                </div>
            </div>
        </div>
    )
}
