import React, {useEffect, useState} from 'react';
import './productDetails.css'
import {useDispatch} from "react-redux";
import {editProductAction} from "../../store/actions";

export const ProductDetails = ({product}) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({name: '', description: '', price: ''})

    useEffect(() => {
        setForm({name: product.name, description: product.description, price: product.price})
    }, [product])

    const onSaveProductHandler = (event) => {
        event.preventDefault()
        dispatch(editProductAction({...product, name: form.name, description: form.description, price: form.price}))
    }

    const formHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    return (
        <div className='product-details'>
            <img src={product.imgUrl} alt="img" style={{width: '100px'}}/>

            <form onSubmit={onSaveProductHandler}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Product name</label>
                    <input type="text" className="form-control" name='name' value={form.name} onChange={formHandler}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Product description</label>
                    <textarea className="form-control" name='description' value={form.description} onChange={formHandler} rows="3"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Product price $</label>
                    <input type="number" className="form-control" name='price' value={form.price} onChange={formHandler}/>
                </div>
                <button className='btn btn-success' type="submit" disabled={!form.name || !form.price}>Save</button>
            </form>
        </div>
    );
}
