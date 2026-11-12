import { Route, Routes } from "react-router-dom";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import ListaProdutos from "./pages/listaProdutos/ListaProdutos";
import Home from "./pages/home/Home";
import DetProduto from "./pages/detproduto/DetProduto";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";

export default function app(){
    return(
        <>
       < Header/>
       <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path="/produtos" element={<ListaProdutos/>}/>
        <Route path="/detalheproduto" element={<DetProduto/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/AdmProdutos" element={<AdmProdutos/>}/>
        <Route path="*" element={
            
            <img className="container-not-found" src="https://cdn.dribbble.com/userupload/25439422/file/original-af9c309401b13edcd50861b6196ac9ee.gif" alt="imagem de não encontrado" />
    
            }/>
       </Routes>
       <Footer/>
       
        </>
    )
}
