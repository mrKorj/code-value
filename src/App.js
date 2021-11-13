import {NavBar} from "./components/navBar/NavBar";
import './App.css';
import {SearchPanel} from "./components/searchPanel/SearchPanel";
import {ProductsPage} from "./components/productsPage/ProductsPage";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {getDataFromLocalStorageAction} from "./store/actions";

function App() {
    const {products} = useSelector(state => state.appState)
    // const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('users-hours-table', JSON.stringify(products))
    }, [products])

    // useEffect(() => {
    //     dispatch(getDataFromLocalStorageAction(JSON.parse(localStorage.getItem('code-value')) || []))
    // }, [dispatch])


    return (
        <div style={{width: '100%'}}>
            <NavBar/>
            <SearchPanel/>
            <div className='container'>
                <ProductsPage/>
            </div>
        </div>
    );
}

export default App;
