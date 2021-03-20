import React, { useState, useEffect } from 'react';

import styles from './GalleryZoom.module.scss';

import { RiArrowRightSLine, RiArrowLeftSLine} from 'react-icons/ri';



export default function GalleryZoom(props) {

    const [specificPhoto, setSpecificPhoto] = useState();

    useEffect( () => {
        window.addEventListener('keydown', handleKeyDown);
        setSpecificPhoto(props.clickedEl.srcZoom.default);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    // eslint-disable-next-line
    }, [])

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            props.setDisappearOveral(false);
        }
    }


    const nextPhotoLeft = (e, data) => {

        const positionOfCurrent = props.gallery.map( g => g.srcZoom.default).indexOf(data);
        const arrayPhotoLength = props.gallery.length;


        if (positionOfCurrent === 0) {
            setSpecificPhoto(props.gallery[arrayPhotoLength - 1].srcZoom.default)
        } else {
            setSpecificPhoto(props.gallery[positionOfCurrent - 1].srcZoom.default)
        }

        e.stopPropagation();
    }


    const nextPhotoRight = (e, data) => {

        const positionOfCurrent = props.gallery.map( g => g.srcZoom.default).indexOf(data);
        const arrayPhotoLength = props.gallery.length;


        if (positionOfCurrent === (arrayPhotoLength-1)) {
            setSpecificPhoto(props.gallery[0].srcZoom.default)
        } else {
            setSpecificPhoto(props.gallery[positionOfCurrent + 1].srcZoom.default)
        }

        e.stopPropagation();
    }



    return(
        <div className={styles.GalleryZoomContainer}
             onClick={ props.onClick }
             onKeyDown={() => handleKeyDown()}>
            <div className={styles.photoContainer}>
                <RiArrowLeftSLine
                    className={styles.arrowLeft}
                    fill="#ffffff"
                    size="70"
                    onClick={ (e) => nextPhotoLeft(e, specificPhoto)}/>

                <img src={specificPhoto}
                     alt="Radatice materska skola"
                     className={styles.zoomedPhoto}
                     onClick={ (e) => e.stopPropagation()}/>

                <RiArrowRightSLine
                    className={styles.arrowRight}
                    fill="#ffffff"
                    size="70"
                    onClick={ (e) => nextPhotoRight(e, specificPhoto)}/>
            </div>

        </div>
    )
}
