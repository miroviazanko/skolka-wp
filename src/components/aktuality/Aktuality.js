import React, { useState, useContext, useEffect } from "react";
import { wpDataContext } from '../../App';


import styles from './Aktuality.module.scss';
//import aktualityJson from './aktuality.json';

//import child from '../../assets/aktuality/child.jpg'

import { GiTreeBranch } from 'react-icons/gi'


export default function Aktuality() {

    const { wpPages, wpPosts, findSpecificPost } = useContext(wpDataContext);

    const page = wpPages.length ? findSpecificPost(wpPages, 57) : null;

    const aktuality = wpPosts.length ? wpPosts.map( (p, i) => {
       return (
            <div className={styles.aktualita}
                key={i}>
               <GiTreeBranch className={styles.icon} fill="#598a00" size="22"/>
                <h5>{p.title.rendered}</h5>
               <p dangerouslySetInnerHTML={{ __html: p.content.rendered}}>

                </p>
            </div>
       )
    } ) : null;

    /*useEffect(() => {
        if (wpPages.length && wpEmbed.length !== 0) {
            setContent(findAcfFields(wpPages, 13));
            setImage1(findAcfFields(wpEmbed, 13).acf.uvodny_obrazok_1);
            setImage2(findAcfFields(wpEmbed, 13).acf.uvodny_obrazok_2);
            setPhilosophy(findAcfFields(wpEmbed, 13).acf.nasa_filozofia)
        }
        return () => {

        }
    }, [wpPages, wpEmbed])*/


    /*const aktualityArr = aktualityJson.spravy;

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
    }  )*/


    return (
        <div className={styles.aktualityContainer}>
            <h2>{page ? page.title.rendered : null}</h2>

            <p className={styles.introText} dangerouslySetInnerHTML={{ __html: page ? page.content.rendered : null }}></p>

            { wpPosts.length ? aktuality : null}




            {/*<h2>Aktuality</h2>
            <p className={styles.introText}>Na??a M?? sa pravidelne zap??ja do r??znych s????a????, projektov, aktiv??t. Akt??vne vyh??ad??vame mo??nosti, kde sa m????u zapoji?? deti, rodi??ia, ??i v??etci priatelia. Samozrejme sa sna????me s????a??i?? aj v??grantoch, ktor?? pre na??u M?? znamenaj?? ve??k?? pomoc, ??i u?? materi??lnu alebo finan??n??. Vo viacer??ch sa uk??zalo, ??e aj rodi??ia a??u??itelia vedia by?? zomknut?? a??potvrdilo sa star?? zn??me porekadlo: ,,V jednote je sila!???</p>

            <img src={child}
                 alt="dieta skola Radatice"
                 className={styles.childPhoto}/>

            {aktuality}*/}
        </div>
    )
}
