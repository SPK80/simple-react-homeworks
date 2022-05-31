import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './Greeting.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import {PopUpMessage} from "./PopUpMessage";

type PropsType = {
    name: string
    usersCount: number
    changeName: (name: string) => void
    confirm: () => void
    greetingMessage: string | null
    error:boolean
}

export const AlternativeGreeting: React.FC<PropsType> = (props) => {

    const onChangeNameHandler = (e: ChangeEvent<HTMLInputElement>) =>
        props.changeName(e.currentTarget.value)

    const onClickConfirmHandler = () => props.confirm()

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.confirm()
        }
    };
    return (
        <div className={s.greeting}>
            <div>
                <SuperInputText
                    type="text"
                    value={props.name}
                    onChange={onChangeNameHandler}
                    onKeyDown={onKeyPressHandler}
                    placeholder='Enter your name'
                />
                <SuperButton
                    onClick={onClickConfirmHandler}
                    disabled={props.name === ''}
                    className={s.altAddButton}
                > add
                </SuperButton>
            </div>

            <PopUpMessage
                text={'Spaces are not allowed'}
                show={props.error}
            />

            <div className={s.totalUsers}>users: {props.usersCount}</div>

            <PopUpMessage
                text={props.greetingMessage??''}
                show={props.greetingMessage!==null}
            />

        </div>
    );
}

export default AlternativeGreeting;