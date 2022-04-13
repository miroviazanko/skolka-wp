import React, { useState, useContext, useEffect } from "react";
import { wpDataContext } from '../../App';

import styles from './ONas.module.scss';

import { MdZoomOutMap } from 'react-icons/md';
import { IoMdFlower } from 'react-icons/io';


import ZoomPhotoOveral from './zoomPhotoOveral/ZoomPhotoOveral';
import Personal from './personal/Personal';



export default function ONas() {

    const { wpPages, wpEmbed, findSpecificPost } = useContext(wpDataContext);

    const [content, setContent] = useState();
    const [image1, setImage1] = useState();
    const [image2, setImage2] = useState();
    const [ philosophy, setPhilosophy ] = useState();


    useEffect(() => {
        if (wpPages.length && wpEmbed.length !== 0) {
            setContent(findSpecificPost(wpPages, 13));
            setImage1(findSpecificPost(wpEmbed, 13).acf.uvodny_obrazok_1);
            setImage2(findSpecificPost(wpEmbed, 13).acf.uvodny_obrazok_2);
            setPhilosophy(findSpecificPost(wpEmbed, 13).acf.nasa_filozofia )
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



    const ourPhilosophy = philosophy ? philosophy.map((p, i) => {
        return (
            <li key={i}>
                <IoMdFlower size="28"
                    fill="#c81c1c"
                    className={styles.flowerIcon} />
                {p.filozofia}
            </li>
        )
    }): null;




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

            <ul className={styles.ourPhilosophy}>
                {ourPhilosophy}
            </ul>

            <Personal />

        </div>
    )
}
