import React, { useState, useContext, useEffect } from "react";
import { wpDataContext } from '../../App';


import styles from './ONas.module.scss';

import photo1 from '../../assets/cliparts/gadgets.jpg';
import photo2 from '../../assets/cliparts/pexels-sarah-trummer-955793.jpg';
import girlFlowers from '../../assets/onas/dievca-vlcimak-800.jpg';

import { MdZoomOutMap } from 'react-icons/md';
import { IoMdFlower } from 'react-icons/io';


import ZoomPhotoOveral from './zoomPhotoOveral/ZoomPhotoOveral';
import Personal from './personal/Personal';



export default function ONas() {

    const { wpPages, wpEmbed } = useContext(wpDataContext);

    const [content, setContent] = useState();
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();


    const findAcfFields = (arrayOfFields, idNum) => {
        return (
            arrayOfFields.length && arrayOfFields.find(a => {
                return a.id === idNum && a;
            })
        )
    }

    useEffect(() => {
        if (wpPages.length && wpEmbed.length !== 0) {
            setContent(findAcfFields(wpPages, 13));
            setImage1(findAcfFields(wpEmbed, 13).acf.uvodny_obrazok_1);
            setImage2(findAcfFields(wpEmbed, 13).acf.uvodny_obrazok_2);
        }
        return () => {

        }
    }, [wpPages, wpEmbed])

    const [zoom0, setZoom0] = useState(false)
    const [zoom1, setZoom1] = useState(false)
    const [displayOveral, setOveral] = useState(false)
    const setZoomStates = [setZoom0, setZoom1]
    const zooms = [zoom0, zoom1]

    //const width = window.innerWidth;

    const zoomStyles = { transform: `scale(1.2)`, filter: `brightness(50%)` }

    const philosophy = [
        { key: 1, text: 'vedieme deti k prírode' },
        { key: 2, text: 'rozvíjame pohybovú zručnosť' },
        { key: 3, text: 'nabádame ich k tvorivosti' },
        { key: 4, text: 'prebúdzame v nich lásku k umeniu' }
    ]


    const onVisibleZoom = (setVissibleState) => {
        //if (width < 850) return
        if (displayOveral) return
        setVissibleState(prevstate => !prevstate);
    }

    const disappearOveral = (setVissible) => {
        //if (width < 850) return
        setVissible(prevstate => !prevstate);
        setZoom0(false)
        setZoom1(false)
    }


    const photosArray = [image1, image2];


    const photos = image1 && image2 ? photosArray.map((ph, i) => {
            return (
                <div className={styles.oskolkePhotoContainer}
                    key={i}
                    onMouseOver={() => onVisibleZoom(setZoomStates[i])}
                    onMouseLeave={() => onVisibleZoom(setZoomStates[i])}
                    onClick={() => onVisibleZoom(setOveral)}
                >
                    <img src={ph}
                        alt="skolka Radatice"
                        className={styles.oskolkePhoto}
                        style={zooms[i] ? { ...zoomStyles } : null}
                    />

                    {zooms[i] ? <MdZoomOutMap className={styles.zoom} size="42" fill="#ffffff" /> : null}
                </div>
            )
        }) : null






    const ourPhilosophy = philosophy.map((p, i) => {
        return (
            <li key={i}>
                <IoMdFlower size="28"
                    fill="#c81c1c"
                    className={styles.flowerIcon} />
                {p.text}
            </li>
        )
    })








    return (
        <div className={styles.oskolkeContainer}
        >

            <h2>O nás</h2>

            <div className={styles.oskolkePhotos}>
                {photos}
            </div>

            <div dangerouslySetInnerHTML={{ __html: content ? content.content.rendered : null }}></div>



            { displayOveral /*&& (width > 850)*/ ?
                <ZoomPhotoOveral
                    onClick={ () => disappearOveral( setOveral )}
                    displayOveral={displayOveral}
                    setDisplay={ () => disappearOveral( setOveral)}
                    photo1={image1}
                    photo2={image2}
                    zoom0={zoom0}
                    zoom1={zoom1}
                />
            : null}

            <p>Naša Materská škola Radatice sa nachádza v tichom a prekrásnom prostredí. Deti využívajú veľkú záhradu s preliezkami, veľkým pieskoviskom, oddychovou zónou a vlastným dopravným ihriskom. Práve kvôli svojmu prostrediu, sa zameriava na environmentálnu výchovu – od čoho sa odvíja aj jej názov – LESINKOVIA.</p>
            <br />
            <p>Triedy sú priestranné, ponúkajú veľa priestoru na hru, edukáciu, či kreativitu dieťaťa. Súčasťou tried je aj oddelená spálňa a taktiež veľká kúpeľňa s umyvárkou. Prevádzka MŠ je od 07:00 do 16:00.</p>

            <h3>O Lesinkoch</h3>
            <p>Výchova a vzdelávanie sa realizuje prostredníctvom Školského vzdelávacieho programu – LESINKOVIA. Cez rôzne aktivity upevňujeme pozitívny vzťah k prírode, k jej ochrane, starostlivosti o zeleň, kvety, zeleninu, ovocie, ale taktiež zvieratá. Vytvárame podnetné prostredie, plné pohody, lásky a pozornosti, aby sme čo najviac uspokojili potreby dieťaťa, ktorého osobnosť rozvíjame rôznorodými činnosťami.</p>

            <img src={girlFlowers}
                alt="ekologicka skola"
                className={styles.ecologyPhoto}
            />
            <h3>Naša filozofia</h3>

            <ul className={styles.ourPhilosophy}>
                {ourPhilosophy}
            </ul>

            <Personal />

        </div>
    )
}
