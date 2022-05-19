import { createContext,useContext } from "react";
import { getUnique } from "../helpers";
import { productos } from "../data";

// Creamos el contexto de la App.
const contextCart = createContext([]);

// Exporto el useContext para consumir los datos facilmente y ahorrar imports.
export const useCartContext = () => useContext(contextCart);

// Creamos el provider con estado y funciones globales. 
const CartContextProvider = ({children}) =>{
    // Aca van estado y funciones globales
    const productosData = productos();
    const categories = getUnique(productosData);
  
    return (
        <contextCart.Provider value={{ productosData, categories }}>
            {children}
        </contextCart.Provider>
    )
}

export default CartContextProvider;