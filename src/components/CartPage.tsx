import {useContext} from "react";
import {MyContext} from "../context/ProductContextProvider.tsx";
import {DollarSign} from "lucide-react";

let CartPage=()=>{

    let {allProducts,
        setAllProducts,
        searchedProducts,
        paginatedProducts,
        setPaginatedProducts,
        setSearchedProducts,
        setSelectedItem,
        addToCart,
        cart,
        totalQty,
        totalPrice,
        increaseQty,
        decreaseQty,
        findTotalQty,


    } = useContext(MyContext)

    return (



        <>
            <h2 className='pt-34 px-10 text-4xl font-bold'>Shopping Cart</h2>

            {

                cart.length>0?

                    <div className="max-w-7xl mx-auto p-6 flex flex-col gap-2  lg:grid lg:grid-cols-12 lg:gap-6">



                        {/* LEFT SIDE */}
                        <div className="col-span-12 lg:col-span-8  dark:bg-amber-950 dark:text-white bg-white p-4 rounded shadow">




                            <div className="divide-y">
                                {cart.map(item => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col gap-2  lg:grid lg:grid-cols-12 lg:gap-4 py-4 items-center"
                                    >
                                        {/* Image */}
                                        <div className="col-span-3">
                                            <img
                                                src={item.thumbnail}
                                                className="w-24 border rounded"
                                                alt={item.title}
                                            />
                                        </div>

                                        {/* Name */}
                                        <div className="col-span-4">
                                            <p className="font-medium">{item.title}</p>
                                        </div>

                                        {/* Price */}
                                        <div className="col-span-2 font-semibold">
                                            ${item.price}
                                        </div>

                                        {/* Quantity */}
                                        <div className="col-span-2 flex items-center gap-2">
                                            <button
                                                onClick={() => decreaseQty(item.id)}
                                                className="px-3 py-1 border rounded cursor-pointer"
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQty(item.id)}
                                                className="px-3 py-1 border rounded cursor-pointer"
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Item Total */}
                                        <div className="col-span-1 font-semibold">
                                            ${item.quantity * item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-span-12 lg:col-span-4  dark:bg-amber-950 dark:text-white bg-white p-4 rounded shadow h-fit">
                            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

                            <div className="flex justify-between mb-2">
                                <span>Total Items</span>
                                <span>{totalQty}</span>
                            </div>

                            <div className="flex justify-between font-semibold text-lg mb-4">
                                <span>Total Price</span>
                                <span>₹{totalPrice}</span>
                            </div>

                            <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold">
                                Proceed to Buy
                            </button>
                        </div>
                    </div>

                    :

                    <div className='flex w-screen h-screen items-center justify-center'>

                        <div className=' flex justify-center bg-gray-100 w-1/2 h-1/2   rounded shadow'>
                            <h1 className='text-4xl font-bold'>Your shopping cart is empty</h1>
                        </div>


                    </div>


            }





        </>


    )


}

export default CartPage;