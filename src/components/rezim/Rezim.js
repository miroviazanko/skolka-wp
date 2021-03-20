import React from "react";

import styles from './Rezim.module.scss';

import rezim from '../../assets/rezim/rezim.jpg';



export default function Rezim() {


    return (
        <div className={styles.rezimContainer}>
            <h2>Režim dňa</h2>
            <img src={rezim} alt="denny rezim materska skola" className={styles.rezimImg}/>
        </div>
    )
}
