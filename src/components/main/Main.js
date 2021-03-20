import React from 'react';

import styles from './Main.module.scss';

import OSkolke from './oskolke/OSkolke';
import Personal from './personal/Personal';

import clouds from '../../assets/main/clouds-long-blue.svg';



export default function Main() {
    return (
        <main className={styles.main}>
            <OSkolke />

            <img src={clouds}
                alt="clouds"
                className={styles.clouds} />

            <Personal />
        </main>
    )
}

