import './App.css';
import Titulo from "./components/titulo";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";

function App() {
 
  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
        <NavBar />
        <Titulo title="Transporte BA" subtitle="Una app que te ayudará a conocer,en tiempo real, donde está el transporte que estás esperando."/>
        <ItemListContainer />
    </div>
  );
}

export default App;
