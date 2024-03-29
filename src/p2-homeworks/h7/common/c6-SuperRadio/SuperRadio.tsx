import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
    vertical?: boolean
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        vertical,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }
    
    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
        <label
            key={name + '-' + i}
        >
            <input
                type={'radio'}
                name={name}
                onChange={onChangeCallback}
                checked={value === o}
                value={o}
            />
            {o}
            <i></i>
        </label>
    )) : []
    
    let finalClass = s.superRadio
    vertical && (finalClass = finalClass + " " + s.vertical)
    
    return (
        <span className={finalClass} {...restProps}>
            {mappedOptions}
        </span>
    )
}

export default SuperRadio
