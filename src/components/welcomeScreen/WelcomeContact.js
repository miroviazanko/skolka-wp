import React, {useContext} from 'react';
import { wpDataContext } from '../../App';

import styles from './WelcomeContact.module.scss';

import { MdPlace, MdEuroSymbol } from 'react-icons/md';
import { IoMdClock } from 'react-icons/io';
import {  HiOutlineMail } from 'react-icons/hi';
import {  FiPhoneCall } from 'react-icons/fi';


export default function WelcomeScreen() {

    const { wpAcf, findSpecificPost } = useContext(wpDataContext);

    let contacts = findSpecificPost(wpAcf, 43).acf;


    return (
        <div className={styles.welcomeContactContainer}>
            { contacts ?
                <>
                    <div className={styles.gpsContainer}>
                        <MdPlace size={70} fill="#b73d2e" className={styles.icon}/>
                        <p className={styles.addressHeader}>Adresa</p>
                        <p className={styles.address}>{contacts.adresa}</p>
                    </div>

                    <div className={styles.timeContainer}>
                        <IoMdClock size={70} fill="#ea7b22" className={styles.icon}/>
                        <p className={styles.openHeader}>Otváracia doba</p>
                        <p className={styles.open}>{contacts.otvaracia_doba}</p>
                    </div>

                    <div className={styles.mailContainer}>
                        <HiOutlineMail size={70} strokeWidth="5" stroke="#046bb0" fill="#ffffff" className={styles.icon}/>
                        <p className={styles.mailHeader}>Napíšte nám</p>
                        <p className={styles.mail}><a href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
                    </div>

                    <div className={styles.phoneContainer}>
                        <FiPhoneCall size={65} strokeWidth=".8" stroke="#ffffff" fill="#6da61b" className={styles.icon}/>
                        <p className={styles.callHeader}>Zavolajte nám</p>
                        <p className={styles.call}>{contacts.tel_cislo}</p>
                    </div>

                    <div className={styles.taxContainer}>
                        <p className={styles.taxIcon}>{contacts.skolne}
                            <MdEuroSymbol size={65} strokeWidth=".8" stroke="#ffffff" fill="#bbb800" className={styles.euro}/>
                        </p>
                        <p className={styles.taxHeader}>Školné</p>
                        <p className={styles.ibanIB}>IBAN: </p>
                        <p className={styles.iban}>{contacts.iban}</p>
                    </div>
                </>
            : null}

        </div>

    )

}



