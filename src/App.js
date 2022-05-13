import './App.css';
import Titulo from "./components/titulo";
import NavBar from "./components/navbar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
      <div className="gradient leading-relaxed tracking-wide flex flex-col">
          <NavBar appName="Tienda DeTodo" />
          <Titulo title="DeTodo.com" subtitle="Eso que buscábas y no encontrabas, lo conseguís acá!"/>
          <Routes>
            <Route path="/" element= {<ItemListContainer />} />
            <Route exact path="/detalle/:id" element= {<ItemDetailContainer />} />
            <Route path="/" element= {<ItemListContainer />} />
            <Route path="/*" element= {<Navigate to="/" replace />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
