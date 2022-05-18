import './App.css';
import Titulo from "./components/titulo";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
      <div className="gradient leading-relaxed tracking-wide flex flex-col">
          <NavBar appName="Tienda DeTodo" />
          <Titulo title="DeTodo.com" subtitle="Eso que buscábas y no encontrabas, lo conseguís acá!"/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/producto/:itemId" element={<ItemDetailContainer />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
