import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
	// key не нужно типизировать
	affair: AffairType
	deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
	const deleteCallback = () => {
		props.deleteAffairCallback(props.affair._id)
	}
	
	const getPriorityStyle = (priority: AffairPriorityType) => {
		switch (priority) {
			case "low":
				return s.lowPriority
			case "middle":
				return s.middlePriority
			case "high":
				return s.highPriority
		}
	}
	
	return (
		<div className={s.affair}>
			<div className={s.name}>{props.affair.name}</div>
			<div>
				<div className={getPriorityStyle(props.affair.priority)}>{props.affair.priority}</div>
				<button onClick={deleteCallback}>❌</button>
			</div>
		</div>
	)
}

export default Affair
