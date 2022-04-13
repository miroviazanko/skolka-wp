import React, { useState, useEffect, useContext } from "react";
import { wpDataContext } from '../../App';


import styles from './Tlaciva.module.scss';

import { FaLeaf } from 'react-icons/fa';
import { RiDownloadCloud2Line } from 'react-icons/ri';


export default function Tlaciva() {

	const { wpPages, wpEmbed, findSpecificPost } = useContext(wpDataContext);
	const [ files, setFiles ] = useState(null);

	console.log(files);

	useEffect(() => {
        if (wpPages.length && wpEmbed.length !== 0) {
            setFiles(findSpecificPost(wpEmbed, 62).acf.docs_repeater);
        }
        return () => {

        }
    }, [wpPages, wpEmbed])

    return (
        <div className={styles.tlacivaContainer}>

            <h2>Tlačivá</h2>
			
			{ files && files.map( (file, index) => {
				return (
					<div className={styles.tlacivaSpecific} key={index}>
						<FaLeaf
							size="28"
							fill="#598a00"
							className={styles.leaf}
						/>
						<p>{file.docs_title}</p>
						<a href={file.docs_file} target="blank" download>
							Stiahnuť súbor
							<RiDownloadCloud2Line className={styles.downloadIcon} color="#598a00"/>
						</a>
					</div> )
				}
			)}

        </div>
    )
}
