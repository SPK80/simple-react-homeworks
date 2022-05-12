import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
	avatar: string
	name: string
	message: string
	time: string
}

const Message = (props: MessagePropsType) => {
	return (
		<div className={s.message}>
			
			<img className={s.avatar}
					 src={props.avatar}
					 alt={'avatar'}
			/>
			
			<div className={s.corner}>
				<div className={s.circle}></div>
				<div className={s.square}></div>
			</div>
			
			<div className={s.messageBox}>
				<div>
					<div className={s.name}>
						{props.name}
					</div>
					<div className={s.messageText}>
						{props.message}
					</div>
				</div>
				<div className={s.time}>
					{props.time}
				</div>
			</div>
		</div>
	)
}

export default Message;