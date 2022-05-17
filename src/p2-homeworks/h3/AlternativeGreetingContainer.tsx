import React, {useState} from "react";
import AlternativeGreeting from "./AlternativeGreeting";

type PropsType = {
    usersCount: number
    addUserCallback: (name: string) => void
}

const AlternativeGreetingContainer: React.FC<PropsType> = (props) => {
    
    const [name, setName] = useState<string>('')
    const [greetingMessage, setGreetingMessage] = useState<string | null>(null)
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    
    const changeName = (newName: string) => {
        const trimmedName = newName.trim();
        if (trimmedName !== newName) {
            setErrorMessage('Spaces are not allowed')
            setTimeout(() => setErrorMessage(null), 1000)
        } else {
            setErrorMessage(null)
        }
        setName(trimmedName)
    }
    
    const confirm = () => {
        props.addUserCallback(name)
        setGreetingMessage(`Hi ${name} !`)
        setTimeout(() => setGreetingMessage(null), 2000)
        setName('')
    }
    
    return (
        <div>
            <AlternativeGreeting
                name={name}
                usersCount={props.usersCount}
                changeName={changeName}
                confirm={confirm}
                greetingMessage={greetingMessage}
                errorMessage={errorMessage}
            />
        </div>
    )
}
export default AlternativeGreetingContainer