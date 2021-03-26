import React, { useContext, useState, useEffect } from "react";
import { wpDataContext } from '../../../App';


import styles from './Personal.module.scss';




export default function Personal(props) {


    const { wpPages } = useContext(wpDataContext);
    const [ acfDatas, setAcfDatas ] = useState([]);
    const [ zabkyTeachers, setZabkyTeachers ] = useState([])
    const [ sovickyTeachers, setSovickyTeachers ] = useState([])
    const [ nepedagog, setNepedagog ] = useState([]);


    const findAcfFields = (arrayOfFields, idNum) => {
        return (
            arrayOfFields.length && arrayOfFields.find(a => {
                return a.id === idNum && a;
            })
        )
    }

    useEffect(() => {
        if (wpPages.length) {
            let acf = findAcfFields(wpPages, 13).acf;
            setAcfDatas( acf );

            setNepedagog([[acf.fotka_zamestnanec_1, acf.meno_zamestnanec_1],
                          [acf.fotka_zamestnanec_2, acf.meno_zamestnanec_2],
                          [acf.fotka_zamestnanec_3, acf.meno_zamestnanec_3],
                          [acf.fotka_zamestnanec_4, acf.meno_zamestnanec_4],])
            setZabkyTeachers([[ acf.fotka_ucitelky_1, acf.meno_ucitelky_1],
                              [ acf.fotka_ucitelky_2, acf.meno_ucitelky_2]]);
            setSovickyTeachers([[ acf.fotka_ucitelky_3, acf.meno_ucitelky_3],
                                [ acf.fotka_ucitelky_4, acf.meno_ucitelky_4]]);
        }
        return () => {

        }
    }, [wpPages, zabkyTeachers.length, sovickyTeachers.length, nepedagog.length])


    const zabky = zabkyTeachers.length ? zabkyTeachers.map((s, i) => {
        return (
            <figure className={styles.sovickaFigure} key={i}>
                <img src={s[0].toString()} alt={s[1]} />
                <figcaption>{s[1]}</figcaption>
            </figure>
        )
    }) : null;


    const sovicky = sovickyTeachers.length ? sovickyTeachers.map((s, i) => {
        return (
            <figure className={styles.sovickaFigure} key={i}>
                <img src={s[0].toString()} alt={s[1]} />
                <figcaption>{s[1]}</figcaption>
            </figure>
        )
    }) : null;

    const neped = nepedagog.length ? nepedagog.map( (n,i) => {
        return(
            <figure className={styles.nepedFigure} key={i}>
                <img src={n[0].toString()} alt={n[1]} />
                <figcaption>{n[1]}</figcaption>
                {/*<figcaption>{n.title}</figcaption>*/}
            </figure>
        )
    }) : null;





    return (
        <div>
            { zabkyTeachers.length ?
                <div className={styles.sovicky}>
                    <h5 className={styles.sovickyHeader}>{acfDatas.nazov}</h5>
                    <p>{acfDatas.popis}</p>
                    <div>
                        { zabky }
                    </div>
                </div>
             : null }

            { sovickyTeachers.length ?
                <div className={styles.sovicky}>
                    <h5 className={styles.sovickyHeader}>{acfDatas.nazov_triedy_2}</h5>
                    <p>{acfDatas.popis_triedy_2}</p>
                    <div>
                        { sovicky }
                    </div>
                </div>
            : null }

            {nepedagog.length ?
                <div className={styles.nepedagog}>
                    <h5 className={styles.nepedagogHeader}>{acfDatas.nazov_nepedagogicki}</h5>
                    {neped}
                </div>
            : null }

        </div>
    )
}
