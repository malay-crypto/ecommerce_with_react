import {useContext, useEffect, useState} from "react";
import {MyContext} from "../context/ProductContextProvider.tsx";
import axios from "axios";
import SearchTopBar from "./SearchTopBar.tsx";
import SearchLeftSideBar from "./SearchLeftSideBar.tsx";
import {useNavigate} from "react-router-dom";

let Home=()=>{


        let {allProducts,
            setAllProducts,
            searchedProducts,
            paginatedProducts,
            setPaginatedProducts,
            setSearchedProducts,
            setSelectedItem,
            addToCart,
            pageIndex,
            setPageIndex,
            setSelectedCategories,
            setMaxPrice,
            setSearchText,
            sortBy,
            setSortBy,


        } = useContext(MyContext)

    useEffect(()=>{

        setSelectedCategories([]);
        setMaxPrice(5000);
        setSearchText('');
        setPageIndex(0);

        console.log('home use effect ....')
        let fetchProduct=async ()=>{
             let r=await axios.get('https://dummyjson.com/products')
            console.log(r.data.products)
            setAllProducts(r.data.products)
           // setPaginatedProducts(r.data.products)
            setSearchedProducts(r.data.products)


            //-------------

            let r2=r.data.products.slice(0,4);
            setPaginatedProducts(r2);




        }
        fetchProduct();

    },[])


     let navigate= useNavigate()

    let productClick=(product)=>{

            setSelectedItem(product)
            navigate('/detail')
    }

    let addToCartButtonclick=(e,product)=>{
            e.stopPropagation()
            addToCart(product)
        console.log('product added : ',product)
    }

    let nextClick=(e)=>{


            if( (pageIndex*4+4)<searchedProducts.length){
                setPageIndex(prev=>prev+1)
            }

    }

    let prevClick=(e)=>{


        if( pageIndex>0){
            setPageIndex(prev=>prev-1)
        }

    }

    useEffect(() => {

        //whenever user searches for an item and click next or prev button , this will run
        console.log('page index ',pageIndex)
        console.log('length of search product ',searchedProducts.length)
        let startIndex=pageIndex*4
        let endIndex=startIndex+4;
        let r=searchedProducts.slice(startIndex,endIndex);
        setPaginatedProducts(r);

    }, [pageIndex, searchedProducts, sortBy]);

    return (


        <>

            {/*main outer div*/}
            <div className="flex pt-28 items-start">

                {/* left side bar */}
                <div className="sticky top-28 ">
                    <SearchLeftSideBar/>
                </div>


                        {/*right side */}
                        <div className="p-8 flex flex-col">
                            <SearchTopBar/>

                                    {paginatedProducts.length>0?

                                        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-x-4">
                                            {
                                                paginatedProducts.map((product)=>

                                                    <div key={product.id} className="rounded-3xl shadow-md text-center flex flex-col items-center p-10 cursor-pointer hover:shadow-2xl" onClick={()=>productClick(product)}>

                                                        <img src={product.thumbnail} alt=""/><br/>
                                                        <h2 className='text-2xl'>{product.title}</h2>
                                                        <h2 className='text-xl'>${product.price}</h2>
                                                        <button className='px-4 py-2 bg-amber-500 text-xl cursor-pointer rounded-3xl hover:shadow-2xl' onClick={(e)=>addToCartButtonclick(e,product)}>Add to Cart</button>

                                                    </div>

                                                )

                                            }
                                        </div>

                                        :<h1 className='text-blue-700 font-bold text-4xl'>No product found</h1>
                                    }

                                    {/*pagination*/}
                                    <div className="flex justify-center items-center space-x-5 mt-4">
                                        <button className='p-2 bg-emerald-300 font-bold cursor-pointer'
                                                onClick={prevClick} disabled={pageIndex==0}>
                                            prev
                                        </button>
                                        <div>{pageIndex+1}</div>
                                        <button className='p-2 bg-emerald-300 font-bold cursor-pointer'
                                                onClick={nextClick} disabled={(pageIndex*4+4)>=searchedProducts.length}>
                                            next
                                        </button>
                                    </div>
                        </div>

            </div>
        </>
    )


}

export default Home;