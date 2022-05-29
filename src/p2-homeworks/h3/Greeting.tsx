import React from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string
    setNameCallback: (name: string) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    return (
        <div className={s.greeting}>
            <span>
                <SuperInputText
                    value={name}
                    onChangeText={setNameCallback}
                    onEnter={addUser}
                    spanClassName={s.errorMessage}
                    error={error ? 'Please enter you name' : ''}
                />
            </span>
            <SuperButton
                className={s.addButton}
                onClick={addUser}
                disabled={name === ''}
            > add
            </SuperButton>
            <span className={s.totalUsers}>users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
