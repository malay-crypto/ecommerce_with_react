import {Link} from "react-router-dom";
import Home from "./Home.tsx";

let MenuBar=()=>{


    return(


        <>

        <div className='flex h-25 bg-amber-950 text-white justify-between items-center px-8  shadow-2xl fixed top-0 left-0 right-0 mb-14'>

            <h1 className='text-4xl font-bold'>E Commerce App</h1>
            <h2 className='font-bold text-2xl'><Link to='/'>Home</Link></h2>
        </div>

        </>


    )




}

export default MenuBar;