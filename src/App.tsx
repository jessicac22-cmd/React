import { Route, Routes } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import Home from "./Home";

export default function app(){
    return(
        <>
       < Header/>
       <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/produtos" element={<ListaProdutos/>}/>
       </Routes>
       <Footer/>
       
        </>
    )
}
