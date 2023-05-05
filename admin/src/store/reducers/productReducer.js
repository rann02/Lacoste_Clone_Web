const initialState = {
    products: [],
    product: {}
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'fetch/products':
            return {
                ...state,
                products: action.payload
            }
            case 'fetch/bySlug':
            return {
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}