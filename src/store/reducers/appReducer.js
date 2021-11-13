import {actionTypes} from "../actionTypes";
import {mockData} from "../mockData";

const initialState = {
    products: mockData,
    productDetails: mockData[0]
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_FROM_LOCALSTORAGE: {
            return {...state, products: action.payload}
        }
        case actionTypes.DELETE_PRODUCT: {
            return {...state, products: state.products.filter(p => p.id !== action.payload)}
        }
        case actionTypes.SHOW_PRODUCT_DETAILS: {
            return {...state, productDetails: state.products.find(p => p.id === action.payload)}
        }
        case actionTypes.EDIT_PRODUCT: {
            const products = state.products.map(p => {
                if (p.id === action.payload.id) return action.payload
                return p
            })
            return {...state, products, productDetails: action.payload}
        }
        case actionTypes.ADD_PRODUCT: {
            const product = {...action.payload, imgUrl: './img/product.png', creationDate: Date.now(), id: Date.now()}
            return {...state, products: [...state.products, product]}
        }
        default:
            return state
    }
}
