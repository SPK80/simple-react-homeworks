import React, {useState} from "react";
import s from "./request.module.css";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI, ResponseType} from "../api/requestsAPI";


export const Request: React.FC = () => {
    
    const [success, setSuccess] = useState(false)
    const [response, setResponse] = useState<ResponseType | null>(null)
    
    const onClickButtonHandler = () => {
        requestsAPI.testAuth(success)
            .then(setResponse)
            .catch(setResponse)
    }
    
    const onChangeCheckedHandler = (ch: boolean) => {
        setSuccess(ch)
    }
    
    return (
        <div className={s.request}>
            <SuperButton onClick={onClickButtonHandler}>
                Request
            </SuperButton>
            <SuperCheckbox onChangeChecked={onChangeCheckedHandler}/>
            <div style={{color: 'blue'}}>{response?.info}</div>
            <div style={{color: 'red'}}>{response?.errorText}</div>
        </div>
    )
}