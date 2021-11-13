import {actionTypes} from "./actionTypes";

export const deleteProductAction = (id) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: id
    }
}

export const showProductDetailsAction = (id) => {
    return {
        type: actionTypes.SHOW_PRODUCT_DETAILS,
        payload: id
    }
}

export const editProductAction = (product) => {
    return {
        type: actionTypes.EDIT_PRODUCT,
        payload: product
    }
}

export const addProductAction = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        payload: product
    }
}

export const getDataFromLocalStorageAction = (data) => {
    return {
        type: actionTypes.GET_DATA_FROM_LOCALSTORAGE,
        payload: data
    }
}
