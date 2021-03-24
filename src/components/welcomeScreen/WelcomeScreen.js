import React, {useContext} from "react";

import styles from './WelcomeScreen.module.scss';

import children from '../../assets/cliparts/children-transparent-900.png';

import WelcomeContact from './WelcomeContact';

import { wpDataContext } from '../../App'




export default function WelcomeScreen() {

    const { wpPages } = useContext(wpDataContext);


    const findAcfFields = (arrayOfFields, idNum) => {
        return (
            arrayOfFields.length && arrayOfFields.find(a => {
                return a.id === idNum && a;
            })
        )
    }

    let welcomePage = findAcfFields(wpPages, 15);


        return (
            <>
                { wpPages.length ?
                    <div className={styles.welcomeContainer}>

                    <h1>
                            {welcomePage.title.rendered}
                        </h1>

                        <img src={children}
                            alt="deti"
                            className={styles.children} />

                        <p className={styles.introText} dangerouslySetInnerHTML={{ __html: welcomePage ? welcomePage.content.rendered : null }}>

                        </p>

                        <WelcomeContact />

                    </div> : null}
            </>

    )
}
