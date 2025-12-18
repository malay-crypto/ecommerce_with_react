import {createContext, useState} from "react";

let MyContext=  createContext()
export {MyContext}

let ProductContextProvider=({children}) => {




        let [allProducts, setAllProducts]=useState([])
        let [searchedProducts, setSearchedProducts]=useState([])
        let [paginatedProducts, setPaginatedProducts]=useState([])



    return (

        <>
            <MyContext.Provider value={{allProducts, setAllProducts,searchedProducts, paginatedProducts, setPaginatedProducts,setSearchedProducts}}>
                {children}
            </MyContext.Provider>


        </>


    )

}

export default ProductContextProvider;