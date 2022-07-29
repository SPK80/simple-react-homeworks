import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {Button, Slider} from "antd";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <Button type="primary">Primary Button</Button>
            <Slider range defaultValue={[20, 50]} disabled={false}/>

            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={setValue1}
                />
            </div>

            <div>

                {/*<span>{value1}</span>*/}
                {/*<SuperDoubleRange*/}
                {/*    value={[value1, value2]}*/}
                {/*    onChangeRange={([value1, value2]) => {*/}
                {/*        setValue1(value1)*/}
                {/*        setValue2(value2)*/}
                {/*    }}*/}
                {/*    // сделать так чтоб value1 и value2 изменялось*/}
                {/*/>*/}
                {/*<span>{value2}</span>*/}
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
