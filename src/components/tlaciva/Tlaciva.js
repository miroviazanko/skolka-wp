import React from "react";

import styles from './Tlaciva.module.scss';

import { FaLeaf } from 'react-icons/fa';



export default function Tlaciva() {


    return (
        <div className={styles.tlacivaContainer}>
            <h2>Tlačivá</h2>
            <div className={styles.tlacivaSpecific}>
                <FaLeaf
                    size="28"
                    fill="#235808"
                    className={styles.leaf}
                />
                <p>Súhlas so spracovaním údajov</p>
                <a href="../../assets/tlaciva/CCF_000001.pdf" target="blank" download="sparacovanie-udajov.pdf">tlačivo - súhlas so spracovaním údajov</a>
            </div>
            <div className={styles.tlacivaSpecific}>
                <FaLeaf
                    size="28"
                    fill="#235808"
                    className={styles.leaf}
                />
                <p>Žiadosť o prijatie dieťaťa do mš</p>
                <a href="../../assets/tlaciva/prihlaska (1).doc" target="blank" download="prihlaska.doc">tlačivo - Žiadosť o prijatie dieťaťa do mš</a>
            </div>
        </div>
    )
}
