import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./header.module.css"

function Header() {
    return (
        <div className={s.headerWrap}>
            <div className={s.navLinks}>
                <NavLink
                    className={(navData) => navData.isActive ? s.activeNavLink : s.navLink}
                    // activeClassName={s.activeNavLink} NavLink activeClassName prop does not exist in v6
                    to={PATH.PRE_JUNIOR}> PreJunior
                </NavLink>
                
                <NavLink
                    className={(navData) => navData.isActive ? s.activeNavLink : s.navLink}
                    to={PATH.JUNIOR}> Junior
                </NavLink>
                
                <NavLink
                    className={(navData) => navData.isActive ? s.activeNavLink : s.navLink}
                    to={PATH.JUNIOR_PLUS}> Junior+
                </NavLink>
            
            </div>
            <span></span>
        </div>
    )
}

export default Header
