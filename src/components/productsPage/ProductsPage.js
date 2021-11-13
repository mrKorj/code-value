import React from 'react';
import {useSelector} from "react-redux";
import {Product} from "../product/Product";
import './productsPage.css'
import {ProductDetails} from "../productDetails/ProductDetails";

export const ProductsPage = () => {
    const {products, productDetails} = useSelector(state => state.appState)

    return (
        <div className='products-page'>
            <div className='product-list-section'>
                {
                    products.map(prod => (
                        <Product product={prod} key={prod.id}/>
                    ))
                }
            </div>

            <div className='product-details-section'>
                <ProductDetails product={productDetails}/>
            </div>
        </div>
    );
}
