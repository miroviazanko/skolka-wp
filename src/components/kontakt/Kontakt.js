import React from "react";


import styles from './Kontakt.module.scss';




export default function Kontakt() {


    return (
        <div className={styles.kontaktContainer}>
            <h2>Kontakt</h2>
            <div className={styles.kontaktText}>
                <h5>Materská škola</h5>
                <p>Radatice 210</p>
                <p>082 42 Radatice</p>
                <p>Tel: +421 51 779 62 21</p>
                <p>email: <a href="mailto:materska.skola.radatice@gmail.com">materska.skola.radatice@gmail.com</a></p>
                <h5>Riaditeľka MŠ: &nbsp;&nbsp; <span className={styles.riaditelka}>Mgr. Jana Kochanová</span></h5>
                <h5>Zriaďovateľ: &nbsp;&nbsp; <span className={styles.obec}>obec Radatice</span></h5>
                <p>Obecný úrad</p>
                <p>Radatice 105</p>
                <p>082 42 Radatice</p>
                <p>Tel.: +421 51 779 62 34</p>
                <p>Tel.: +421 905 598 258</p>

                <p className={styles.veduca}>Vedúca školskej jedálne:</p>
                <p>Magdaléna Liptáková</p>
                <p className={styles.veduca}>Číslo účtu:</p>
                <p>IBAN: SK57 5600 0000 0004 5682 9001</p>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.2792710456565!2d21.183285916134032!3d48.92912237929441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473eee20c0959965%3A0x1e6478108bacafd3!2sRadatice%20210%2C%20082%2042%20Radatice!5e0!3m2!1ssk!2ssk!4v1605691486040!5m2!1ssk!2ssk" width="600" height="450" frameBorder="0" style={{border:`0`}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="Mapa" className={styles.map}></iframe>
        </div>
    )
}
