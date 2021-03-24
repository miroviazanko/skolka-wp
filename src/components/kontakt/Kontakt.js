import React, {useContext} from "react";
import {wpDataContext} from '../../App'

import styles from './Kontakt.module.scss';




export default function Kontakt() {

    const {wpPages} = useContext(wpDataContext);

    const findAcfFields = (arrayOfFields, idNum) => {
        return (
            arrayOfFields.length && arrayOfFields.find(a => {
                return a.id === idNum && a;
            })
        )
    }

    let contacts = findAcfFields(wpPages, 43);

    let title = findAcfFields(wpPages, 43);

    return (
        <div className={styles.kontaktContainer}>
            <h2 dangerouslySetInnerHTML={{ __html: title ? title.title.rendered : null }}></h2>
            <div className={styles.kontaktText} dangerouslySetInnerHTML={{__html: contacts ? contacts.content.rendered : null}}>

            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.2792710456565!2d21.183285916134032!3d48.92912237929441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eee20c0959965%3A0x1e6478108bacafd3!2sRadatice%20210%2C%20082%2042%20Radatice!5e0!3m2!1ssk!2ssk!4v1605691486040!5m2!1ssk!2ssk" width="600" height="450" frameBorder="0" style={{border:`0`}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Mapa" className={styles.map}></iframe>
        </div>
    )
}
