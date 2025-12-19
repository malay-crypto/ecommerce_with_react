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
            <div className="flex flex-col justify-center items-center w-screen h-screen ">

                <div className="flex items-start pt-34 ">
                    <div className='sticky top-34'>
                        <img src={selectedItem.thumbnail} alt=""/>
                    </div>

                    <div className="flex flex-col items-center max-w-100 space-y-4 ">
                        <h2 className='text-2xl'>{selectedItem.title}</h2>
                        <h2 className='text-4xl'>${selectedItem.price}</h2>

                        <h2 className='text-2xl mb-7 pt-4  border-b'>Product Detail</h2>

                        <div className='text-xl'>Rating : {selectedItem.rating}</div>
                        <div className='text-xl'>Weight : {selectedItem.weight}</div>
                        <div className='text-xl'>Brand : {selectedItem.brand}</div>
                        <div className='text-xl'>Category : {selectedItem.category}</div>

                        <h2 className='text-2xl mb-7 pt-4 border-b'>About this item</h2>

                        <div className='text-xl'>{selectedItem.description}</div>
                    </div>

                </div>

            </div>

        </>

    )


}

export default ProductDetail;