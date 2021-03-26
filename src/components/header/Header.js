import React, {useState, useContext, useEffect} from "react";

import styles from './Header.module.scss';

import { GiStrawberry } from 'react-icons/gi'
import branch from '../../assets/branch/real-branch-transp-700.png';

import { wpDataContext } from '../../App';



export default function Header() {

    const [slogan, setSlogan] = useState(null);
    const { wpPages, findSpecificPost } = useContext(wpDataContext);

    useEffect(() => {
        setSlogan(findSpecificPost(wpPages, 15));
        return () => {
        }
    }, [wpPages])


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
            { slogan ?
                <p className={styles.textik}>{slogan.acf.slogan}</p> : null
            }
                </div>
    )
}





