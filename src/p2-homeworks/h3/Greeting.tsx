import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

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
    const inputClass = error ? s.inputError : ''

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser()
        }
    };

    return (
        <div className={s.greeting}>
            <div>
                <input
                    className={inputClass}
                    value={name}
                    onChange={setNameCallback}
                    onKeyPress={onKeyPressHandler}
                />
                <button
                    onClick={addUser}
                    disabled={name === ''}
                > add
                </button>
            </div>
            {error && <div className={s.errorMessage}>Please enter you name</div>}
            <span className={s.totalUsers}>users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
