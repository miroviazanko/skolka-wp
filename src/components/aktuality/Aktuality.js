import React from "react";

import styles from './Aktuality.module.scss';
import aktualityJson from './aktuality.json';

import child from '../../assets/aktuality/child.jpg'

import { GiTreeBranch } from 'react-icons/gi'


export default function Aktuality() {

    const aktualityArr = aktualityJson.spravy;

    const aktuality = aktualityArr.map( (a, i) => {
        return(
            <div className={styles.aktualita}
                 key={i}>
                <GiTreeBranch className={styles.icon} fill="#8cc81d"/>
                <p key={a.key} className={a.classAktual}>
                    {a.text}
                </p>
            </div>
        )
    }  )


    return (
        <div className={styles.aktualityContainer}>
            <h2>Aktuality</h2>
            <p className={styles.introText}>Naša MŠ sa pravidelne zapája do rôznych súťaží, projektov, aktivít. Aktívne vyhľadávame možnosti, kde sa môžu zapojiť deti, rodičia, či všetci priatelia. Samozrejme sa snažíme súťažiť aj v grantoch, ktoré pre našu MŠ znamenajú veľkú pomoc, či už materiálnu alebo finančnú. Vo viacerých sa ukázalo, že aj rodičia a učitelia vedia byť zomknutí a potvrdilo sa staré známe porekadlo: ,,V jednote je sila!“</p>

            <img src={child}
                 alt="dieta skola Radatice"
                 className={styles.childPhoto}/>

            {aktuality}
        </div>
    )
}
