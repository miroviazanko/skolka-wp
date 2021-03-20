import React, { useState} from "react";

import styles from './Fotogaleria.module.scss';

import { gallery } from './galleryJs';
import { MdZoomOutMap } from 'react-icons/md';

import GalleryZoom from './galleryZoom/GalleryZoom';


export default function Fotogaleria() {

    const galleryArr = gallery.gallery;

    const [elementHover, setElementHover] = useState();
    const [zoomOveral, setZoomOveral ] = useState(false);

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

    const galleryPhotos = galleryArr.map( g => {
        return (
            <div className={styles.wrapperPhoto}
                 key={g.key}
                 onMouseOver={() => handleHover( g )}
                 onMouseLeave={() => handleDisHover()}
                 onClick={() => onVisibleZoom(setZoomOveral)}
            >
                <img src={g.src.default}
                    alt={g.alt}
                    key={g.key}
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
