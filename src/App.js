import './App.css';
import Titulo from "./components/titulo";
import NavBar from "./components/navbar";
import Cart from "./components/Cart";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import firebaseConnect from "./data/firebase";
import {useEffect} from "react";

// Importamos el contexto exportado en un modulo aparte.
import CartContextProvider from "./context/cartContext.js";

function App() {
 
  useEffect(()=>{
    firebaseConnect();
  });

  return (
    // El metodo PROVIDER va a proveer a mis hijos, funciones y estados a nivel global
    <CartContextProvider>
      <BrowserRouter>
        <div className="gradient leading-relaxed tracking-wide flex flex-col">
            <NavBar appName="Tienda DeTodo" />
            <Titulo title="DeTodo.com" subtitle="Eso que buscábas y no encontrabas, lo conseguís acá!"/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
              <Route exact path="/product/:itemId" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<Cart/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
