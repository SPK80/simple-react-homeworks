import React, {ChangeEvent} from 'react'
import s from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    
    const onChangeLowerCallback = (e: ChangeEvent<HTMLInputElement>) => {
        value && onChangeRange && onChangeRange([+e.currentTarget.value, value[1]])
    }
    
    const onChangeUpperCallback = (e: ChangeEvent<HTMLInputElement>) => {
        value && onChangeRange && onChangeRange([value[0], +e.currentTarget.value])
    }
    
    return (
        <div className={s.range}>
            <div
                className={s.slider + ' ' + s.lower}
            
            ></div>
            <div
                className={s.slider + ' ' + s.upper}
            
            ></div>
        </div>
    )
}

export default SuperDoubleRange


// <input
// type="range"
// min={0}
// max={50}
// value={10}
// id="lower"
// onChange={onChangeLowerCallback}
// />
// <input
//     type={"range"}
//     min={0}
//     max={50}
//     value={10}
//     id="upper"
//     onChange={onChangeUpperCallback}
// />