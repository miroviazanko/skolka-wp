import React,{useContext, useState, useEffect} from "react";
import { wpDataContext } from '../../App';


import styles from './SkJedalen.module.scss';


import vegetable from '../../assets/jedalen/Vegetable-PNG-Image.png';


export default function SkJedalen() {


    const { wpPages, wpEmbed, findSpecificPost } = useContext(wpDataContext);
    const [image, setImage] = useState();

    let canteen = findSpecificPost(wpPages, 25);

    useEffect(() => {
        if (wpEmbed.length !== 0) {
            setImage(findSpecificPost(wpEmbed, 25)._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url);
        }
        return () => {

        }
    }, [wpEmbed])



    return (
        <div className={styles.jedalenContainer}>
            <div dangerouslySetInnerHTML={{__html: canteen ? canteen.content.rendered : null
            }}></div>
            {   image ?
                <img src={image} alt="zelenina" className={styles.vegetable} />
                : null
            }
        </div>
    )





    /*const listok = jedalnyListok.jedalnyListok;

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
    )*/
}
