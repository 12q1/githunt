const initialState = []

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SEARCH_USER':{
            return action.payload
        }
        default:
            return state
    }
}

export default reducer