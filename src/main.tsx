import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom"
import ProductContextProvider from "./context/ProductContextProvider.tsx";

createRoot(document.getElementById('root')!).render(

        <BrowserRouter>
            <ProductContextProvider>
                <App />
            </ProductContextProvider>

        </BrowserRouter>


)
