import {Search} from "lucide-react";
import {useContext, useEffect, useState} from "react";
import {MyContext} from "../context/ProductContextProvider.tsx";

let SearchTopBar=()=>{


    let {
        allProducts,
        setAllProducts,
        searchedProducts,
        paginatedProducts,
        setPaginatedProducts,
        setSearchedProducts,
        searchText,
        setSearchText,
        setPageIndex,

    } = useContext(MyContext)



    let searchInputBoxClick=(e)=>{
        setSearchText(e.target.value)
        //new search begins
        setPageIndex(0)
    }

    return(

        <>
          <div className='flex items-center justify-center  p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg'>

              <Search />
              <input type='text' placeholder='Search by name' onChange={searchInputBoxClick} />


          </div>
        </>


    )




}

export default SearchTopBar;