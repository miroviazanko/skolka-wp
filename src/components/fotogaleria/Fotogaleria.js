import React, { useState, useEffect} from "react";

import styles from './Fotogaleria.module.scss';

//import { gallery } from './galleryJs';
import { MdZoomOutMap } from 'react-icons/md';

import GalleryZoom from './galleryZoom/GalleryZoom';







export default function Fotogaleria() {


    const [galleryArr, setGallery] = useState([]);
    const [elementHover, setElementHover] = useState();
    const [zoomOveral, setZoomOveral] = useState(false);


    useEffect(() => {
        (async () => {
            await fetch('http://localhost/Zpers/skolka-wptheme/wp-json/wp/v2/media?parent=68')
                .then(response => response.json())
                .then(resp => setGallery(resp));
        })();
    }, []);

	console.log(galleryArr);


    const zoomStyles = { transform: `scale(1.1)`, filter: `brightness(50%)` }


    const handleHover = el => {
            return setElementHover(el);
    }

    const handleDisHover = () => {
        setElementHover();
    }

    const onVisibleZoom = setSt => {
        setSt( prevState => !prevState)
    }

    const galleryPhotos = galleryArr.map( (g, i) => {

        let imgSize = g.media_details.sizes;

        let gallerySize = imgSize.medium ? imgSize.medium.source_url : imgSize.full.source_url


        return (

            <div className={styles.wrapperPhoto}
                 key={i}
                 onMouseOver={() => handleHover( g )}
                 onMouseLeave={() => handleDisHover()}
                 onClick={() => onVisibleZoom(setZoomOveral)}
            >
                <img src={gallerySize}
                    alt={g.alt}
                    className={styles.specificPhoto}
                    style={elementHover === g ? { ...zoomStyles } : null}
                />

                {elementHover === g ?
                    <MdZoomOutMap className={styles.zoomIcon}
                    size="42" fill="#ffffff" />
                : null}

            </div>
        )
    })





    return (
        <div className={styles.fotogaleriaContainer}>

            <h2 className={styles.fotogaleriaHeader}>
                Fotogaléria
            </h2>

            <div className={styles.photosContainer}>
                {galleryPhotos}
            </div>

            { zoomOveral ?
                <GalleryZoom
                    gallery={galleryArr}
                    onClick={() => onVisibleZoom(setZoomOveral)}
                    clickedEl={elementHover}
                    setDisappearOveral={ () => onVisibleZoom(setZoomOveral)}
                />
            : null }
        </div>
    )
}
