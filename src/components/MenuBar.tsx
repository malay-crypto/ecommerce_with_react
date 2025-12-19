import {Link, useNavigate} from "react-router-dom";
import Home from "./Home.tsx";
import {ShoppingCart} from "lucide-react";
import {useContext} from "react";
import {MyContext} from "../context/ProductContextProvider.tsx";

let MenuBar=()=>{

     let navigate= useNavigate()

    let {allProducts,
        setAllProducts,
        searchedProducts,
        paginatedProducts,
        setPaginatedProducts,
        setSearchedProducts,
        setSelectedItem,
        addToCart,
        totalQty


    } = useContext(MyContext)


    return(


        <>

        <div className='flex h-25 bg-amber-950 text-white justify-between items-center px-8  shadow-2xl fixed top-0 left-0 right-0 mb-14'>

            <h1 className='text-4xl font-bold'>E Commerce App</h1>

            <div className='flex items-center justify-between space-x-5'>
                <h2 className='font-bold text-2xl'><Link to='/'>Home</Link></h2>
               ({totalQty}) <ShoppingCart className='cursor-pointer text-4xl' onClick={()=>navigate('/cart')} />

            </div>
        </div>

        </>


    )




}

export default MenuBar;