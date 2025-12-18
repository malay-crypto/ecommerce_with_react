import {useContext, useEffect, useState} from "react";
import {MyContext} from "../context/ProductContextProvider.tsx";
import axios from "axios";
import SearchTopBar from "./SearchTopBar.tsx";
import SearchLeftSideBar from "./SearchLeftSideBar.tsx";

let Home=()=>{


        let {allProducts,
            setAllProducts,
            searchedProducts,
            paginatedProducts,
            setPaginatedProducts,
            setSearchedProducts} = useContext(MyContext)

    useEffect(()=>{

        let fetchProduct=async ()=>{
             let r=await axios.get('https://dummyjson.com/products')
            console.log(r.data.products)
            setAllProducts(r.data.products)
            setPaginatedProducts(r.data.products)
            setSearchedProducts(r.data.products)

        }
        fetchProduct();

    },[])


    return (


        <>

            <div className="flex pt-28 items-start">
                <div className="sticky top-28 ">
                    <SearchLeftSideBar/>
                </div>


                        <div className="p-8 flex flex-col">
                            <SearchTopBar/>

                                    {searchedProducts.length>0?

                                        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-4">
                                            {
                                                searchedProducts.map((product)=>

                                                    <div key={product.id} className="rounded-3xl shadow-md text-center flex flex-col items-center p-10">

                                                        <img src={product.thumbnail} alt=""/><br/>
                                                        <h2 className='text-2xl'>{product.title}</h2>
                                                        <h2 className='text-xl'>${product.price}</h2>


                                                    </div>

                                                )

                                            }
                                        </div>

                                        :<h1 className='text-blue-700 font-bold text-4xl'>No product found</h1>
                                    }

                        </div>

            </div>
        </>
    )


}

export default Home;