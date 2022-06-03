import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText'
import s from './superEditableSpan.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    className?: string
    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus, // игнорировать изменение этого пропса
        onBlur,
        onEnter,
        spanProps,
        
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}
    
    const onEnterHandler = () => {
        setEditMode(false) // выключить editMode при нажатии Enter
        
        onEnter && onEnter()
    }
    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false) // выключить editMode при нажатии за пределами инпута
        
        onBlur && onBlur(e)
    }
    const onDoubleClickHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true) // включить editMode при двойном клике
        
        onDoubleClick && onDoubleClick(e)
    }
    
    const spanClassName = `${s.superSpan}  ${className}`
    const inputClassName = s.superSpan
    
    
    return (
        <>
            {editMode
                ? (
                    <SuperInputText
                        className={inputClassName}
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurHandler}
                        onEnter={onEnterHandler}
                        
                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                ) : (
                    <span
                        style={{display: "inline-flex", flexDirection: "row", alignItems: "center"}}
                    >
                        <span
                            style={{border: "solid 1px #ccc", borderRadius: "3px"}}
                            onDoubleClick={onDoubleClickHandler}
                            className={spanClassName}
    
                            {...restSpanProps}
                        >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                            {children || restProps.value}
                    </span>
                        <span
                            style={{cursor: "pointer"}}
                            onClick={onDoubleClickHandler}>
                            <svg
                                viewBox="64 64 896 896" focusable="false" data-icon="edit" width="1em" height="1em"
                                fill="currentColor" aria-hidden="true">
                            <path
                                d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                        </svg></span>
                    </span>
                )
            }
        </>
    )
}

export default SuperEditableSpan
