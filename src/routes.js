import { Fragment } from "react";
import React from "react";
import Login from "./pages/Login/index";
import Sobremesa from "./pages/Sobremesa/index";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Carrinho from "./pages/Carrinho/index";
import Cadastro from "./pages/Cadastro";

function Router() {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/sobremesa" element={<Sobremesa/>}/>
                    <Route path="/carrinho" element={<Carrinho/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default Router;