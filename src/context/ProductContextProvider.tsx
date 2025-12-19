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

    let [selectedItem, setSelectedItem]=useState('')
    let [totalQty, setTotalQty]=useState(0)
    let [totalPrice, setTotalPrice]=useState(0)

    let [pageIndex, setPageIndex]=useState(0)

    let [cart, setCart]=useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem("cart")) :[])

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

            }}>
                {children}
            </MyContext.Provider>


        </>


    )

}

export default ProductContextProvider;