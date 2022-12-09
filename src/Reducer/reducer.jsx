export const reducer = (state, action) => {
    switch(action.type) {
        case 'light':
            return {}
        case 'dark': 
            return {}
        default: 
            throw new Error()
    }
}