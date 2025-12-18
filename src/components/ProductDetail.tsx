import {useContext} from "react";
import {MyContext} from "../context/ProductContextProvider.tsx";

let ProductDetail = ( ) => {

    let {
        allProducts,
        setAllProducts,
        searchedProducts,
        paginatedProducts,
        setPaginatedProducts,
        setSearchedProducts,
        setSelectedItem,
        selectedItem,


    } = useContext(MyContext)


    return (


        <>
            <div className="flex items-center justify-center items-center w-screen h-screen">
                <div className="flex items-center  flex-col">
                    <img src={selectedItem.thumbnail} alt=""/><br/>
                    <h2 className='text-2xl'>{selectedItem.title}</h2>
                    <h2 className='text-xl'>${selectedItem.price}</h2>
                </div>

            </div>

        </>

    )


}

export default ProductDetail;