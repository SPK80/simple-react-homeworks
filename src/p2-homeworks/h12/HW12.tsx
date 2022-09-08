import React from "react";
import s from "./HW12.module.css";
import {AppStoreType} from "../h10/bll/store";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some', 'white', 'cadetblue', 'crazy'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme)
    
    const dispatch = useDispatch()
    
    const onChangeCallback = (selectedTheme: string) =>
        dispatch(changeThemeAC(selectedTheme))
    
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
             </span>
            <div>
                <SuperSelect
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                    style={{margin: 10}}
                />
                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                    vertical={true}
                    style={{margin: 10}}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW12;
