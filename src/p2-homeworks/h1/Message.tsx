import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export default (props: MessagePropsType) => {
    return (
        <div className={s.message}>

            <img className={s.avatar}
                 src={props.avatar}
                 alt={'avatar'}
            />

            <div className={s.corner}>
                <div className={s.square}></div>
                <div className={s.circle}></div>
            </div>


            <div className={s.messageBox}>
                <div className={s.nameAndMessage}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.messageText}>
                        {props.message}
                    </div>
                </div>
                <div className={s.time}>   {props.time}
                </div>
            </div>
        </div>
    )
}