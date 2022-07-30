const initState: string = 'some'
type ThemeStateType = typeof initState

type ActionsType = ReturnType<typeof changeThemeAC>

export const themeReducer = (state = initState, action: ActionsType): ThemeStateType => {
    switch (action.type) {
        case "CHANGE-THEME": {
            return action.theme
        }
        default:
            return state
    }
}

export const changeThemeAC = (theme: string) => ({
    type: "CHANGE-THEME",
    theme
} as const)
