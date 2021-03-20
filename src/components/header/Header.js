import React from "react";

import styles from './Header.module.scss';

import { GiStrawberry } from 'react-icons/gi'
import branch from '../../assets/branch/real-branch-transp-700.png';





export default function Header() {


    return (
        <div className={styles.welcomeSmallContainer}>
            <div className={styles.sun}></div>

            <img src={branch}
                alt="konar"
                className={styles.branch}
            />

            <p className={styles.lesinkovia}>Lesink
                <span >
                    <GiStrawberry size="56" className={styles.strawberry}/>
                </span>
                via
            </p>
            <p className={styles.textik}>Vedieme deti s láskou k prírode</p>
        </div>
    )
}





