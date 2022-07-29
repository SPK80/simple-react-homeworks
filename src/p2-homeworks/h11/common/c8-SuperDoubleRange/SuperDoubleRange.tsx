import React, {ChangeEvent, MouseEvent} from 'react'
import s from "./SuperDoubleRange.module.css";

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    console.log('value:', value)
    // const onChangeLowerCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChangeRange([+e.currentTarget.value, value[1]])
    // }

    // const onChangeUpperCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChangeRange([value[0], +e.currentTarget.value])
    // }

    // const onMouseMoveRange = (e: MouseEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     console.log({x: e.clientX, y: e.clientY})
    // }
    // const onClickRange = (e: MouseEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     // onChangeRange([e.clientX - e.currentTarget.offsetLeft, 0])
    //     console.log(e.clientX - e.currentTarget.offsetLeft)
    // }

    const [value1, value2] = value;

    // function onClickLower(e: MouseEvent<HTMLDivElement>) {
    //     e.preventDefault()
    //     console.log(e.clientX - e.currentTarget.offsetLeft)
    // }
    //
    // function onClickUpper(e: MouseEvent<HTMLDivElement>) {
    //     e.preventDefault()
    //     console.log(e.clientX - e.currentTarget.offsetLeft)
    // }

    function onMouseMove(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault()
        // console.log(e.buttons)
        if (e.buttons === 0) return

        console.log(e.clientX)
        // onChangeRange([value[0] + e.movementX, value[1]])
    }

    return (
        <div className={s.range}
            // onMouseMove={onMouseMoveRange}
        >
            <div
                className={s.slider + ' ' + s.lower}
                style={{left: value1}}
                // onClick={onClickLower}
                onMouseMove={onMouseMove}
            ></div>
            <div
                className={s.slider + ' ' + s.upper}
                style={{left: value2}}
                // onClick={onClickUpper}
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