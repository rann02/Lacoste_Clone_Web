const initialState = {
    categories: [],
    category: {}
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case 'fetch/categories':
            return {
                ...state,
                categories: action.payload
            }
        case 'fetch/byId':
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}