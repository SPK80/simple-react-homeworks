import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    // const inputClass = error ? s.inputError : ''

    // const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         addUser()
    //     }
    // };

    return (
        <div className={s.greeting}>
                <SuperInputText
                    // className={inputClass}
                    value={name}
                    onChange={setNameCallback}
                    // onKeyPress={onKeyPressHandler}
                    onEnter={addUser}
                    spanClassName={s.errorMessage}
                    error={error?'Please enter you name':''}
                />
                <SuperButton
                    onClick={addUser}
                    disabled={name === ''}
                > add
                </SuperButton>
            {/*{error && <div className={s.errorMessage}>Please enter you name</div>}*/}
            <span className={s.totalUsers}>users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
