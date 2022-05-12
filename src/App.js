import './App.css';
import Titulo from "./components/titulo";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";

function App() {
 
  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
        <NavBar appName="Tienda DeTodo" />
        <Titulo title="DeTodo.com" subtitle="Eso que buscábas y no encontrabas, lo conseguís acá!"/>
        <ItemListContainer />
    </div>
  );
}

export default App;
