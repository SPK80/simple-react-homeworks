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
            <div className={s.greetingMessage} hidden={!props.greetingMessage}>{props.greetingMessage}</div>
            <div className={s.errorMessage} hidden={!props.errorMessage}>{props.errorMessage}</div>
        </div>
    );
}

export default AlternativeGreeting;
