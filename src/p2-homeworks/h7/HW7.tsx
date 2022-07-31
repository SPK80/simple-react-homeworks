import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import AlternativeSuperSelect from "./common/c5-SuperSelect/AlternativeSuperSelect";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import s from "../h12/HW12.module.css";

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])
    const theme = useSelector<AppStoreType, string>(state => state.theme)
    
    return (
        <div>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 7
             </span>
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            
            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeSuperSelect
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
