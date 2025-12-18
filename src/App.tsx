
import './App.css'
import Home from "./components/Home.tsx";

import {Route,Routes} from "react-router-dom";
import ProductDetail from "./components/ProductDetail.tsx";
import MenuBar from "./components/MenuBar.tsx";

function App() {


  return (
    <>

      <MenuBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/detail" element={<ProductDetail/>} />

    </Routes>
    </>
  )
}

export default App
