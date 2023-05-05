const initialState = {
    categories: []
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'fetch/categories':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}