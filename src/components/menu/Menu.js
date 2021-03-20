import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

import branch from '../../assets/branch/branch-transp-600.png';
import { HiMenuAlt3 } from 'react-icons/hi';




export default function Menu(props) {

    const [mobileMenu, setMobileMenu] = useState(false);
    const [mobileDisplayMenuList, setMobileDisplayMenuList ] = useState(true);


    const changeMenu = (data) => {
        if (data) {
            setMobileMenu(true)
            setMobileDisplayMenuList(false)
        } else {
            setMobileMenu(false)
            setMobileDisplayMenuList(true)
        }
    }



    useEffect( () => {

        const checkWidth = () => {
            const mq = window.matchMedia(`(max-width: 850px)`);
            changeMenu(mq.matches)
        }

        window.addEventListener("resize", checkWidth);

            const innerW = window.innerWidth;

            changeMenu(innerW <= 850)

        return () => {
            window.removeEventListener("resize", checkWidth)
        }

    }, [])




    const menuList = props.menu.menuList;

    const list = menuList.map((m, i) => (
        <li
            className={styles[`${m.classMenu}`]}
            key={i}
            onClick={() => toggleState(setMobileDisplayMenuList)}>
                    <NavLink
                        to={m.to} exact
                        className={styles.menuLi}

                        >

                            {m.name}

                    </NavLink>
        </li>

                )
            )


    const toggleState = (setState) => {
        setState(prevState => !prevState)
    }





    return (
        <div className={styles.menuContainer} >
            {!mobileMenu ?
                <img src={branch}
                     alt="konar menu"
                    className={styles.menuBranch}/>
                : <HiMenuAlt3 size="42"
                    fill={mobileDisplayMenuList ? `#ffffff` : `#a3d3f3`}
                        className={styles.menuIcon}
                        onClick={ () => toggleState(setMobileDisplayMenuList)}
                />}



            <ul className={`${styles.list} ${mobileDisplayMenuList ? styles.appearMenu : styles.disappearMenu }`}>
                    {list}
                </ul>

        </div>
    )
}
