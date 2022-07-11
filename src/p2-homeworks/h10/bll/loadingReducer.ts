const initState = false

export const startLoadingAC = () => ({
    type: 'START-LOADING'
}) as const

export const stopLoadingAC = () => ({
    type: 'STOP-LOADING'
}) as const

type ActionsType = ReturnType<typeof startLoadingAC> | ReturnType<typeof stopLoadingAC>

export const loadingReducer = (state = initState, action: ActionsType): boolean => {
    switch (action.type) {
        case "START-LOADING":
            return true;
        case "STOP-LOADING":
            return false;
        default:
            return state;
    }
}