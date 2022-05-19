import React, {ChangeEvent} from 'react'
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
    const inputClass = error ? s.error : ''
    
    return (
        <div className={s.greeting}>
            <div>
                <input
                    className={inputClass}
                    value={name}
                    onChange={setNameCallback}
                />
                <button
                    onClick={addUser}
                    disabled={name===''}
                > add
                </button>
            </div>
            {error && <div className={s.errorMessage}>Please enter you name</div>}
            <span className={s.totalUsers}>users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
