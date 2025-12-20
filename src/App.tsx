
import './App.css'
import Home from "./components/Home.tsx";

import {Route,Routes} from "react-router-dom";
import ProductDetail from "./components/ProductDetail.tsx";
import MenuBar from "./components/MenuBar.tsx";
import CartPage from "./components/CartPage.tsx";
import {useContext} from "react";
import {MyContext} from "./context/ProductContextProvider.tsx";




function App() {

  const {

    darkMode,

  } = useContext(MyContext);


  return (
    <>

      <div className={darkMode ? "dark" : ""}>
        <div className= "dark:text-white dark:bg-gray-900 text-black bg-white" >

          <MenuBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detail" element={<ProductDetail/>} />
            <Route path="/cart" element={<CartPage/>} />

          </Routes>

        </div>


      </div>


    </>
  )
}

export default App
