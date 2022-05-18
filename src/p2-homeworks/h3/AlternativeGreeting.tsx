import React, {ChangeEvent} from "react";
import s from './Greeting.module.css';

type PropsType = {
    name: string
    usersCount: number
    changeName: (name: string) => void
    confirm: () => void
    greetingMessage: string | null
    errorMessage: string | null
}

export const AlternativeGreeting: React.FC<PropsType> = (props) => {
    
    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) =>
        props.changeName(e.currentTarget.value)
    
    const onClickConfirmHandler = () => props.confirm()
    
    return (
        <div className={s.greeting}>
            <input
                type="text"
                value={props.name}
                onChange={onChangeNameHandler}
                placeholder='Enter your name'
            />
            <button
                onClick={onClickConfirmHandler}
                disabled={props.name === ''}
            >
                add
            </button>
            <span className={s.totalUsers}>users: {props.usersCount}</span>
            
            {props.greetingMessage && <div className={s.greetingMessage}>{props.greetingMessage}</div>}
            {props.errorMessage && <div className={s.errorMessage}>{props.errorMessage}</div>}
        </div>
    );
}

export default AlternativeGreeting;
