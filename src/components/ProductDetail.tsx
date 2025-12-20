import { useContext } from "react";
import { MyContext } from "../context/ProductContextProvider.tsx";
import { Rating } from 'react-simple-star-rating'

const ProductDetail = () => {
    const {
        selectedItem,
        addToCart,
    } = useContext(MyContext);

    if (!selectedItem) {
        return (
            <div className="flex items-center justify-center h-screen text-xl text-gray-500">
                Loading product details...
            </div>
        );
    }

    const handleAddToCart = () => {
        addToCart(selectedItem);
        console.log("Product added:", selectedItem);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20 px-4">
            <div className="max-w-6xl mx-auto bg-white dark:bg-amber-950  rounded-xl shadow-lg p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* LEFT : Product Image */}
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="sticky top-24 w-full flex flex-col items-center">
                            <img
                                src={selectedItem.thumbnail}
                                alt={selectedItem.title}
                                className="w-full max-w-md rounded-lg shadow-md"
                            />

                            <button
                                onClick={handleAddToCart}
                                className="mt-6 w-full max-w-md bg-amber-500 hover:bg-amber-600
                           text-white text-lg font-semibold py-3 rounded-full
                           transition-all duration-300 shadow-md hover:shadow-xl"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* RIGHT : Product Info */}
                    <div className="flex flex-col space-y-6">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                            {selectedItem.title}
                        </h1>

                        <div className="text-4xl font-semibold text-amber-600">
                            ${selectedItem.price}
                        </div>

                        <div className="border-t pt-4 space-y-2 text-lg text-gray-700 dark:text-white">
                            <p><span className="font-semibold">Rating: {selectedItem.rating}</span>
                                <Rating
                                    initialValue={selectedItem.rating}
                                    readonly
                                    allowFraction
                                    size={26}
                                    SVGclassName="inline-block"

                                />
                            </p>
                            <p><span className="font-semibold">Brand:</span> {selectedItem.brand}</p>
                            <p><span className="font-semibold">Category:</span> {selectedItem.category}</p>
                            <p><span className="font-semibold">Weight:</span> {selectedItem.weight}</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold border-b pb-2 mb-4">
                                About this item
                            </h2>
                            <p className="text-lg text-gray-600  dark:text-white leading-relaxed">
                                {selectedItem.description}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
