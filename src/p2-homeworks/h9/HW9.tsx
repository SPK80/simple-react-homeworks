import React from 'react'
import Clock from './Clock'
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import s from "../h12/HW12.module.css";

function HW9() {
    const theme = useSelector<AppStoreType, string>(state => state.theme)
    
    return (
        <div>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 9
            </span>
            <Clock/>
            
            <hr/>
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    )
}

export default HW9
