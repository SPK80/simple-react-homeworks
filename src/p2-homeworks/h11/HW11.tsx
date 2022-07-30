import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {Slider} from "antd";
import 'antd/dist/antd.css';

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    
    return (
        <div>
            <hr/>
            homeworks 11
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
