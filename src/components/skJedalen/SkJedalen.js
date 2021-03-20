import React from "react";

import styles from './SkJedalen.module.scss';

import jedalnyListok from './jedalny-listok.json';

import vegetable from '../../assets/jedalen/Vegetable-PNG-Image.png';


export default function SkJedalen() {

    const listok = jedalnyListok.jedalnyListok;

    const tyzdenneMenu = listok.map( (m,i) => {

        return(
            <tr key={i}>
                <td>{m.den}</td>
                <td>{m.desiata}</td>
                <td>{m.obed}</td>
                <td>{m.olovrant}</td>
            </tr>
        )
    } )


    return (
        <div className={styles.jedalenContainer}>
            <h2>Školská jedáleň</h2>
            <table className={styles.table}>
                <caption className={styles.caption}>Jedálny lístok</caption>
                <thead>
                    <tr className={styles.casy}>
                        <th>&nbsp;</th>
                        <th>Desiata</th>
                        <th>Obed</th>
                        <th>Olovrant</th>
                    </tr>
                </thead>
                <tbody>
                    {tyzdenneMenu}
                </tbody>
            </table>
            <img src={vegetable} alt="zelenina" className={styles.vegetable}/>
            <p>Vedúca školskej jedálne: Magdaléna Liptáková</p>
        </div>
    )
}
