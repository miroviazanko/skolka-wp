import React, {useContext} from "react";

import styles from './WelcomeScreen.module.scss';

import children from '../../assets/cliparts/children-transparent-900.png';

import WelcomeContact from './WelcomeContact';

import { wpDataContext } from '../../App'




export default function WelcomeScreen() {

    const { wpPages, findSpecificPost } = useContext(wpDataContext);

    let welcomePage = findSpecificPost(wpPages, 15);
    let actualNew = findSpecificPost(wpPages, 224);

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
                        { actualNew.content.rendered.length ?
                            <div className={styles.actualNew}>
                                <h3>{actualNew.title.rendered}</h3>
                                <p dangerouslySetInnerHTML={{ __html: actualNew.content.rendered }}></p>

                            </div> : null
                        }
                        <p className={styles.introText} dangerouslySetInnerHTML={{ __html: welcomePage ? welcomePage.content.rendered : null }}>

                        </p>

                        <WelcomeContact />

                    </div> : null}
            </>

    )
}
