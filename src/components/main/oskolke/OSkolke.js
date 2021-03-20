import React, {useState} from 'react';

import styles from './OSkolke.module.scss';

import photos from './oSkolkePhotos.json';

import picture1 from '../../../assets/cliparts/pexels-sarah-trummer-955793.jpg';
import picture2 from '../../../assets/cliparts/gadgets.jpg';
import picture3 from '../../../assets/cliparts/light-bulb-4514505_1280.jpg';
import cloud1 from '../../../assets/main/clouds/cloud1.png';
import cloud2 from '../../../assets/main/clouds/cloud2.png';
import cloud3 from '../../../assets/main/clouds/cloud3.png';







export default function OSkolke() {

    const [photosOskolke] = useState(photos.photos);

    const photosArray = [ picture1, picture2, picture3 ];
    const cloudsArray = [ cloud1, cloud2, cloud3 ];

    console.log(cloudsArray);

    const photosArr = photosOskolke.map( (ph, i) => {
        return (
            <div className={styles[ph.classWrapper]}
                 key={i}>
                <img src={photosArray[i]}
                    alt={ph.alt}
                    className={styles[ph.classImage]} />
            </div>
        )
    })


    const cloudsArr = cloudsArray.map( (cl, i) =>{
        return(
            <img src={cloudsArray[i]}
                 alt="cloud"
                 key={i}
                 className={styles[`cloud${i+1}`]}
            />
        )
    })




    return (
        <div className={styles.oSkolkeContainer}>
            <div className={styles.smallContainer}>

                <div className={styles.sew}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.header}>O ŠKÔLKE</h1>
                        <p className={styles.text}>
                            Riaditeľkou Materskej školy je Mgr. Jana Kochanová, ktorá sa spolu s pani učiteľkou Bc. Katkou Bartkovou venuje menším deťom. V triede starších detí vedú výchovno vzdelávací proces  Mgr. Stanislava Hudáková a Jana Piatková. Za čistotu je zodpovedná p. Monika Chovanová. MŠ navštevuje 40 detí. V novembri 2015 sme vyhrali súťaž Domestos pre školy. Čo to pre nás znamená? Že počas letných prázdnin v roku 2016 sme zrekonštruovali sociálne zariadenia v MŠ.  Obec získala finančné prostriedky vo výške 4000 € a  materiál v hodnote 4000 €. Je to výborný posun našej škôlky. Viac o pôsobení MŠ môžete nájsť na Facebooku – Materská Škola Radatice.

                        </p>
                    </div>
                </div>
                <div className={styles.picturesContainer}>
                        {photosArr}
                </div>

                {cloudsArr}

            </div>
        </div>
    )
}
