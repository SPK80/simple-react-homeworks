import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {Slider} from "antd";
import 'antd/dist/antd.css';
import s from "../h12/HW12.module.css";
import {useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const theme = useSelector<AppStoreType, string>(state => state.theme)
    
    return (
        <div>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 11
            </span>
            
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                />
            
            </div>
            
            <div>
                <Slider
                    dots={true}
                    style={{width: 150}}
                    range
                    value={[value1, value2]}
                    onChange={([value1, value2]) => {
                        setValue1(value1);
                        setValue2(value2);
                    }}
                />
                <span>{value2}</span>
            </div>
            
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
