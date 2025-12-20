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
        sortBy,
        setSortBy

    } = useContext(MyContext)



    let searchInputBoxClick=(e)=>{
        setSearchText(e.target.value)
        //new search begins
        setPageIndex(0)
    }

    return(

        <>
          <div className='flex items-center justify-center  p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg space-x-5'>

              <Search />
              <input type='text' placeholder='Search by name' onChange={searchInputBoxClick} />

              <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="p-2 border rounded cursor-pointer dark:bg-amber-950"
              >
                  <option value="">Sort By</option>
                  <option value="price-asc">Price: Low → High</option>
                  <option value="price-desc">Price: High → Low</option>
                  <option value="rating-desc">Rating: High → Low</option>
                  <option value="rating-asc">Rating: Low → High</option>
              </select>


          </div>
        </>


    )




}

export default SearchTopBar;