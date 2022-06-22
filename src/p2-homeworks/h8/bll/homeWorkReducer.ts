import {UserType} from "../HW8";

type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckActionType = {
    type: 'check'
    payload: number
}

type AllActionTypes = SortActionType | CheckActionType

export const homeWorkReducer = (state: Array<UserType>, action: AllActionTypes): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            return (action.payload == "up") ? [...state].sort((a, b) => (a.name > b.name) ? 1 : -1)
                : [...state].sort((a, b) => (a.name < b.name) ? 1 : -1)
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}