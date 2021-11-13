import React from 'react';
import './product.css'
import {useDispatch} from "react-redux";
import {deleteProductAction, showProductDetailsAction} from "../../store/actions";

export const Product = ({product}) => {
    const dispatch = useDispatch()

    const deleteProductHandler = (e) => {
        e.stopPropagation()
        dispatch(deleteProductAction(product.id))
    }

    const showProductDetailsHandler = () => {
        dispatch(showProductDetailsAction(product.id))
    }

    return (
        <div className='product' onClick={showProductDetailsHandler}>
            <div className='product-img'>
                <img src={product.imgUrl} alt="pic"/>
            </div>
            <div>
                <p>{product.name}</p>
                <p>{product.description}</p>
            </div>
            <div>
                <button className='btn btn-danger' onClick={deleteProductHandler}>Delete</button>
            </div>
        </div>
    );
}
