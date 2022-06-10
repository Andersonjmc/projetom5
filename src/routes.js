import { Fragment } from "react";
import React from "react";
import Login from "./pages/Login/index";
import Sobremesa from "./pages/Sobremesa/index";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Carrinho from "./pages/Carrinho/index";
import Cadastro from "./pages/Cadastro";
import { CadastroBebidas } from "./pages/CadastroBebidas";
import { DeletaBebida } from "./pages/DeletaBebida/DeletaBebida";

function Router() {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Login/>}/>
                    <Route path="/sobremesa" element={<Sobremesa/>}/>
                    <Route path="/carrinho" element={<Carrinho/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/cadastroBebidas" element={<CadastroBebidas/>}/>
                    <Route path="/deletaBebidas" element={<DeletaBebida/>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default Router;