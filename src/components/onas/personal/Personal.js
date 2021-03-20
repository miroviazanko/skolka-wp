import React from "react";

import styles from './Personal.module.scss';

import sovicka1 from '../../../assets/onas/personal/pexels-mentatdgt-1024311.jpg';



export default function Personal(props) {

    const sovickyFotky = [{ ucitelka: "Mgr. Stanislava Hudáková" }, { ucitelka: "Jana Piatková"}];

    const zabkyFotky = [{ ucitelka: "Mgr. Jana Kochanová – riaditeľka MŠ" }, { ucitelka: "Bc. Katarína Bartková"}];

    const nepedagogArr = [{ name: "Magdaléna Liptáková", title: "vedúca ŠJ" }, { name: "Monika Chovanová", title: "školníčka" }, { name: "Mária Jurková", title: "hlavná kuchárka" }, { name: "Iveta Šoltésová", title: "pomocná sila" },]




    const sovicky = sovickyFotky.map( (s,i) => {
        return(
            <figure className={styles.sovickaFigure} key={i}>
                <img src={sovicka1} alt="ucitelka Radatice materska skola"/>
                <figcaption>{s.ucitelka}</figcaption>
            </figure>
        )
    })

    const zabky = zabkyFotky.map( (s,i) => {
        return(
            <figure className={styles.sovickaFigure} key={i}>
                <img src={sovicka1} alt="ucitelka Radatice materska skola"/>
                <figcaption>{s.ucitelka}</figcaption>
            </figure>
        )
    })

    const nepedagog = nepedagogArr.map( (n,i) => {
        return(
            <figure className={styles.nepedFigure} key={i}>
                <img src={sovicka1} alt="ucitelka Radatice materska skola" />
                <figcaption>{n.name}</figcaption>
                <figcaption>{n.title}</figcaption>
            </figure>
        )
    })





    return (
        <div>
            <h3>Personál</h3>
            <div className={styles.sovicky}>
                <h5 className={styles.sovickyHeader}>trieda žabky (2-4 ročné deti)</h5>
                <p>Trieda sa nachádza na prvom podlaží našej MŠ.Zameriavame sa najmä na adaptáciu detí v MŠ. Trpezlivým a empatickým prístupom začleňujeme deti do kolektívu.</p>
                <div>
                    {zabky}
                </div>
            </div>
            <div className={styles.zabky}>
                <h5 className={styles.sovickyHeader}>trieda sovičky (4-6 ročné deti)</h5>
                <p>Túto triedu navštevujú staršie deti a deti s odloženou školskou dochádzkou. Pripravujeme ich na plynulý prechod z MŠ na ZŠ a zabezpečujeme kvalifikovanú predškolskú prípravu.</p>
                <div>
                    {sovicky}
                </div>
            </div>
            <div className={styles.nepedagog}>
                <h5 className={styles.nepedagogHeader}>Nepedagogickí zamestnanci</h5>
                {nepedagog}
            </div>
        </div>
    )
}
