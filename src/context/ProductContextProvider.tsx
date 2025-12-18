import {createContext, useEffect, useState} from "react";

let MyContext=  createContext()
export {MyContext}

let ProductContextProvider=({children}) => {




        let [allProducts, setAllProducts]=useState([])
        let [searchedProducts, setSearchedProducts]=useState([])
        let [paginatedProducts, setPaginatedProducts]=useState([])


    let [searchText, setSearchText]=useState('')
    let[selectedCategories, setSelectedCategories]=useState([])
    let [maxPrice, setMaxPrice] = useState(600)



    useEffect(() => {
        let filtered = [...allProducts];

        if (searchText) {
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(p =>
                selectedCategories.includes(p.category)
            );
        }

        filtered = filtered.filter(p => p.price <= maxPrice);

        setSearchedProducts(filtered);

    }, [allProducts, searchText, selectedCategories, maxPrice]);


    return (

        <>
            <MyContext.Provider value={{
                allProducts,
                setAllProducts,
                searchedProducts,
                paginatedProducts,
                setPaginatedProducts,
                setSearchedProducts,
                setSearchText,
                setSelectedCategories,
                searchText,
                selectedCategories,
                maxPrice,
                setMaxPrice,

            }}>
                {children}
            </MyContext.Provider>


        </>


    )

}

export default ProductContextProvider;