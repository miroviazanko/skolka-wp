import React from "react";

import styles from './WelcomeScreen.module.scss';


import children from '../../assets/cliparts/children-transparent-900.png';



import WelcomeContact from './WelcomeContact';





export default function WelcomeScreen() {

    return (
        <div className={styles.welcomeContainer}>


            <h1>
                Vitajte na stránke Materskej školy v Radaticiach
            </h1>

            <img src={children}
                 alt="deti"
                 className={styles.children} />

            <p className={styles.introText}>
                Škôlka ponúka všetko čo si môžu rodičia pre svoje deti priať, od kvalifikovaných odborných pedagógov po bohaté priestory v interiéri a veľký areál, v ktorom sa budú deti cítiť ako doma.
            </p>

            <WelcomeContact />

        </div>

    )
}
