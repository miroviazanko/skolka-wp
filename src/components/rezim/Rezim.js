import React, {useContext, useEffect, useState} from "react";

import styles from './Rezim.module.scss';

import { wpDataContext } from '../../App'



export default function Rezim() {

    let { wpEmbed, wpPages } = useContext(wpDataContext);
    const [image, setImage] = useState(null);
    const [ title, setTitle] = useState(null)

    const findAcfFields = (arrayOfFields, idNum) => {
        return (
            arrayOfFields.length && arrayOfFields.find(a => {
                return a.id === idNum && a;
            })
        )
    }

    useEffect(() => {
        if (wpEmbed.length && wpPages.length) {
            setImage(findAcfFields(wpEmbed, 59)._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url);
            setTitle(findAcfFields(wpPages, 59).title.rendered)
        }
    },[wpEmbed, wpPages])

    return (
        <div className={styles.rezimContainer}>
            <h2 dangerouslySetInnerHTML={{ __html: title ? title : null }}></h2>
            {
                image ?
                    <img src={image} alt="denny rezim materska skola" className={styles.rezimImg}/>
                : null
            }
        </div>
    )
}
