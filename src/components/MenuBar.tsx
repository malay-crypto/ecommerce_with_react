import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { useContext, useState } from "react";
import { MyContext } from "../context/ProductContextProvider.tsx";

let MenuBar = () => {

    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const { totalQty } = useContext(MyContext);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 bg-amber-950 text-white shadow-2xl">

                <div className="flex items-center justify-between px-4 py-3 lg:px-8">

                    {/* LOGO */}
                    <h1 className="text-xl lg:text-3xl font-bold">
                        E Commerce App
                    </h1>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-6">
                        <Link to="/" className="text-lg font-semibold">Home</Link>

                        <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => navigate("/cart")}
                        >
                            <ShoppingCart />
                            <span className="font-bold">({totalQty})</span>
                        </div>
                    </div>

                    {/* MOBILE MENU ICON */}
                    <div className="lg:hidden">
                        <Menu
                            className="cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                </div>

                {/* MOBILE DROPDOWN */}
                {open && (
                    <div className="lg:hidden flex flex-col gap-3 px-4 pb-4">
                        <Link
                            to="/"
                            className="font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </Link>

                        <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => {
                                navigate("/cart");
                                setOpen(false);
                            }}
                        >
                            <ShoppingCart />
                            <span className="font-bold">({totalQty})</span>
                        </div>
                    </div>
                )}
            </div>

            {/* PAGE OFFSET FOR FIXED NAVBAR */}
            <div className="h-16 lg:h-20"></div>
        </>
    );
};

export default MenuBar;
