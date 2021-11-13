import React, {useState} from 'react';
import './searchPanel.css'
import {useDispatch} from "react-redux";
import {addProductAction} from "../../store/actions";

export const SearchPanel = () => {
    const dispatch = useDispatch()
    const [showForm, setShowForm] = useState()
    const [form, setForm] = useState({name: '', description: '', price: ''})

    const onAddHandler = () => {
        setShowForm(prev => !prev)
    }

    const formHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const onAddProductHandler = (e) => {
        e.preventDefault()
        dispatch(addProductAction({...form}))
    }


    return (
        <div className='search-panel'>
            <div className='left-side'>
                <button className='btn btn-success' onClick={onAddHandler}>Add</button>
                <input type="text" placeholder='Search'/>
                <select name="sort">
                    <option value="1">by mane</option>
                    <option value="2">by price</option>
                </select>
            </div>

            {
                showForm &&
                <div>
                    <form onSubmit={onAddProductHandler}>
                        <input type="text" name='name' value={form.name} onChange={formHandler} placeholder='product name'/>
                        <input type="text" name='description' value={form.description}  onChange={formHandler} placeholder='description'/>
                        <input type="number" name='price' value={form.price} onChange={formHandler} placeholder='price'/>
                        <button className='btn btn-sm btn-success' disabled={!form.name || !form.price}>save</button>
                    </form>
                </div>

            }
        </div>
    );
}
