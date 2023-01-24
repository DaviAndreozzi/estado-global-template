import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import Cadastro from "../Pages/Cadastro";
import frutaria from "../frutaria.json";
export default function Router() {
    const [carrinho,setCarrinho]=useState([])
    const [frutas, setFrutas] = useState(frutaria.frutaria);

console.log(carrinho)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Mercadinho
                        carrinho={carrinho} // array vai ser preenchido com o valor da tela
                        setCarrinho={setCarrinho}
                        frutas={frutas}
                    />}
                />
                <Route
                    path="/cart"
                    element={<Carrinho
                    carrinho={carrinho} // array vai aparecer na tela
                    setCarrinho={setCarrinho}
                    />}
                />

            <Route 
            path="/cadastro" 
            element={<Cadastro
            frutas={frutas}
             setFrutas={setFrutas}/>}/>

            </Routes>
        </BrowserRouter>
    );
}