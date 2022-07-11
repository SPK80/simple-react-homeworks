import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {startLoadingAC, stopLoadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import {Progress} from "./Progress";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>((state) => state.isLoading);
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(startLoadingAC())
        setTimeout(() => dispatch(stopLoadingAC()), 2000)
        console.log('loading...')
    }
    
    return (
        <div>
            <hr/>
            homeworks 10
            
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><Progress/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
