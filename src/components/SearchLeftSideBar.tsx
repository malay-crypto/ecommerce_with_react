import {useContext, useEffect, useState} from "react";
import {MyContext} from "../context/ProductContextProvider.tsx";

let SearchLeftSideBar = () => {


    let {allProducts, setAllProducts,searchedProducts,
        paginatedProducts, setPaginatedProducts,
        setSearchedProducts} = useContext(MyContext)

        let [categories, setCategories] = useState([])

    let [category, setCategory] = useState([])
    let [price, setPrice] = useState(600)

    useEffect(()=>{
        console.log('search left side bar use effect...')
console.log(' side bar : all products:', allProducts)
            let r=new Set(allProducts.map(p=>p.category))

        r=[...r]
        console.log('set:',r)
        setCategories(r)

    },[allProducts])

    useEffect(() => {


            let selectedRecords=[...allProducts]
        setSearchedProducts(allProducts)
            if(category.length>0)
            {
               selectedRecords=selectedRecords.filter(p=>category.includes(p.category))
                setSearchedProducts(selectedRecords)
            }
            selectedRecords=selectedRecords.filter(p=>p.price<=price)
        setSearchedProducts(selectedRecords)



    }, [price, category]);

let categoryClick=(e)=>{


    console.log('selected : ',e.target.value)
    if(e.target.checked)
        setCategory([...category,e.target.value])
    else{
        let r=category.filter(p=>p!==e.target.value)
        setCategory(r)
    }
}

    return (


        <>
                <div className="flex flex-col gap-6 p-10">
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
                        <h3>${price}</h3>
                        <input type='range' min='1' max='600' onChange={e => setPrice(e.target.value)} value={price} />
                    </div>


                </div>

        </>

    )



}
export default SearchLeftSideBar;