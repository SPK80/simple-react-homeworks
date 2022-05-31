import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    return (
        <>
            <SuperButton>
                <NavLink to={PATH.PRE_JUNIOR}> PreJunior </NavLink>
            </SuperButton>
            
            <SuperButton>
                <NavLink to={PATH.JUNIOR}> Junior </NavLink>
            </SuperButton>
            
            <SuperButton>
                <NavLink to={PATH.JUNIOR_PLUS}> Junior+ </NavLink>
            </SuperButton>
        </>
    
    )
}

export default Header
