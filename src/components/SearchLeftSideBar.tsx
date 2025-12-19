import {useContext, useEffect, useState} from "react";
import {MyContext} from "../context/ProductContextProvider.tsx";

let SearchLeftSideBar = () => {


    let {allProducts,
        setAllProducts,
        searchedProducts,
        paginatedProducts,
        setPaginatedProducts,
        setSearchedProducts,
        maxPrice,
        setMaxPrice,
        selectedCategories,
        setSelectedCategories,
        setPageIndex,


    } = useContext(MyContext)

        let [categories, setCategories] = useState([])




    useEffect(()=>{
        console.log('search left side bar use effect...')
console.log(' side bar : all products:', allProducts)
            let r=new Set(allProducts.map(p=>p.category))

        r=[...r]
        console.log('set:',r)
        setCategories(r)

    },[allProducts])



let categoryClick=(e)=>{


    console.log('selected : ',e.target.value)
    if(e.target.checked)
        setSelectedCategories([...selectedCategories,e.target.value])
    else{
        let r=selectedCategories.filter(p=>p!==e.target.value)
        setSelectedCategories(r)
    }

    //new search begins
    setPageIndex(0)

}

let priceClick=(e)=>{

    setMaxPrice(e.target.value)
    //new search begins
    setPageIndex(0)
}

    return (


        <>
                <div className="flex flex-col gap-6 p-10  ">
                    <h2 className='text-4xl'>Search Filters</h2>

                    <div className="flex flex-col gap-3">
                        <h3 className='text-xl'>Select Category</h3>

                            {
                               categories.map(p =>
                                   <div className='flex space-x-2'><input type='checkbox' value={p} onChange={categoryClick}/><span>{p}</span></div>
                                )
                            }


                    </div>


                    <div className="flex flex-col gap-3">
                        <h3 className='text-xl'>Price Range</h3>
                        <h3>${maxPrice}</h3>
                        <input type='range' min='1' max='600' onChange={priceClick } value={maxPrice} />
                    </div>


                </div>

        </>

    )



}
export default SearchLeftSideBar;