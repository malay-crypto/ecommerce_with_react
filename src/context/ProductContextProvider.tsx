import {createContext, useEffect, useState} from "react";
import axios from "axios";

let MyContext=  createContext()
export {MyContext}

let ProductContextProvider=({children}) => {




        let [allProducts, setAllProducts]=useState([])
        let [searchedProducts, setSearchedProducts]=useState([])
        let [paginatedProducts, setPaginatedProducts]=useState([])


    let [searchText, setSearchText]=useState('')
    let[selectedCategories, setSelectedCategories]=useState([])
    let [maxPrice, setMaxPrice] = useState(5000)

    let [selectedItem, setSelectedItem]=useState('')
    let [totalQty, setTotalQty]=useState(0)
    let [totalPrice, setTotalPrice]=useState(0)

    let [pageIndex, setPageIndex]=useState(0)

    let [cart, setCart]=useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem("cart")) :[])

    let [sortBy, setSortBy] = useState('')
        let [darkMode, setDarkMode]=useState(false)

    let [loading, setLoading] = useState(false);



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


        //  SORT (AFTER FILTERING)
        if (sortBy === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        }

        if (sortBy === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        if (sortBy === 'rating-desc') {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        if (sortBy === 'rating-asc') {
            filtered.sort((a, b) => a.rating - b.rating);
        }


        setSearchedProducts(filtered);
        setPaginatedProducts(filtered);
        setPageIndex(0)// reset page on new sort/filter



    }, [allProducts, searchText, selectedCategories, maxPrice,sortBy]);


       let addToCart=(product)=>{

           let r=cart.find(p=>p.id === product.id)
           let s=''
           if(r){
               s=cart.map((p)=>p.id===product.id?{...p,quantity:p.quantity+1}:p)
               setCart(s)
           }
           else{
                s=[...cart,{...product,quantity:1}];
               setCart(s)
           }

           localStorage.setItem("cart",JSON.stringify(s))

       }

       let increaseQty=(id)=>{

           let r=cart.map((p)=>p.id===id?{...p,quantity:p.quantity+1}:p)
           setCart(r)

       }
    let decreaseQty=(id)=>{
        let r=cart.map((p)=>p.id===id?{...p,quantity:p.quantity-1}:p)
        r=r.filter(p=>p.quantity>0)
        setCart(r)
    }


    let findTotalQty=()=>{
           let r=cart.reduce((acc,cur)=>acc+cur.quantity,0)
        setTotalQty(r)
    }

    let findTotalPrice=()=>{
        let r=cart.reduce((acc,cur)=>acc+cur.quantity*cur.price,0)
        setTotalPrice(r.toFixed(2))
    }

    useEffect(() => {
        findTotalQty()
        findTotalPrice()
    }, [cart]);

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
                setSelectedItem,
                selectedItem,
                addToCart,
                cart,
                totalQty,
                setTotalQty,
                totalPrice,
                setTotalPrice,
                increaseQty,
                decreaseQty,
                findTotalQty,
                pageIndex,
                setPageIndex,
                sortBy,
                setSortBy,
                darkMode,
                setDarkMode,
                loading,
                setLoading,



            }}>
                {children}
            </MyContext.Provider>


        </>


    )

}

export default ProductContextProvider;