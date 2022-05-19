import './App.css';
import Titulo from "./components/titulo";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { getUnique } from "./helpers";
import { productos } from "./data";
import { ContextApp } from "./context/cartContext";

function App() {
 
  const productosData = productos();
  const categories = getUnique(productosData);

  return (
    // El metodo PROVIDER va a proveer a mis hijos, funciones y estados a nivel global
    <ContextApp.Provider value={{ productosData, categories }}>
      <BrowserRouter>
        <div className="gradient leading-relaxed tracking-wide flex flex-col">
            <NavBar appName="Tienda DeTodo" />
            <Titulo title="DeTodo.com" subtitle="Eso que buscábas y no encontrabas, lo conseguís acá!"/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
              <Route exact path="/product/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </div>
      </BrowserRouter>
    </ContextApp.Provider>
  );
}

export default App;
