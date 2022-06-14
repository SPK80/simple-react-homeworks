import React, {DetailedHTMLProps, SelectHTMLAttributes, useState} from 'react'
import s from './AlternativeSuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type PropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}
const AlternativeSuperSelect: React.FC<PropsType> =
    ({
         options,
         value,
         onChangeOption
     }) => {
        
        const [listShow, setListShow] = useState(false)
        
        const mappedOptions: JSX.Element[] =
            options ? options.map((opt, i) => {
                        const onClickOptionHandler = () =>
                            onChangeOption && onChangeOption(opt)
                        
                        return (
                            <span
                                key={i}
                                onClick={onClickOptionHandler}
                            >
                                {opt}
                            </span>
                        )
                    }
                )
                : []
        
        const onClickValueHandler = () => setListShow(!listShow)
        const onBlurValueHandler = () => setListShow(false)
        
        return (
            <span
                className={s.value}
                onClick={onClickValueHandler}
                onBlur={onBlurValueHandler}
            >
                {value}
                {listShow && <span className={s.options}>
                    {mappedOptions}
                </span>}
            </span>
        )
    }

export default AlternativeSuperSelect
