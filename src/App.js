import './App.css';
import Titulo from "./components/titulo";
import NavBar from "./components/navbar";
import Cart from "./components/Cart";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import ImportData from "./data/importData";

// Importamos el contexto exportado en un modulo aparte.
import CartContextProvider from "./context/cartContext.js";

function App() {
 
  useEffect(()=>{

  },[]);

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
              <Route exact path="/importar-productos" element={<ImportData/>} />
            </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
