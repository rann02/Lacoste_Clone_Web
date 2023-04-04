import { fetchProduct } from './actionType'

const url = 'https://api.randy02.my.id'

const fetchProductSuccess = (data) => {
    return {
        type: fetchProduct,
        payload: data

    }
}


export function fetchProducts() {
    // The `extraArgument` is the third arg for thunk functions
    return async (dispatch, getState, api) => {
        // you can use api here
        try {
            const res = await fetch(url + '/users/products')
            if (!res.ok) {
                throw await res.json()
            }
            const data = await res.json()
            dispatch(fetchProductSuccess(data))
        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchProductsBySlug(slug) {
    // The `extraArgument` is the third arg for thunk functions
    return async (dispatch, getState, api) => {
        // you can use api here
        try {
            const res = await fetch(url + '/users/products' + `/${slug}`)
            if (!res.ok) {
                throw await res.json()
            }
            const data = await res.json()
            dispatch(
                {
                    type: 'fetch/bySlug',
                    payload: data
                }
            )
        } catch (error) {
            console.log(error);
        }
    }
}

export function fetchCategory() {
    // console.log('SALLLL');
    return async (dispatch, getState, api) => {
        try {
            const res = await fetch( url + '/users/categories')
            if (!res.ok) {
                throw await res.json()
            }

            const data = await res.json()

            dispatch({
                type: 'fetch/categories',
                payload: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}
