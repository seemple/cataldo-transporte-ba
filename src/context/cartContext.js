import { createContext,useContext,useState } from "react";
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
  
    const [cart,setCart] = useState([]);

    const isInCart = (id) => {
        return (cart.find( i => i.id == id)) 
    };

   
	const handleOnAddItem = (cantidad,item) =>{

		let newCart = [];

		
		if(isInCart(item.id)) {
			
			newCart = cart.map((i) => {
				if(i.id == item.id) i.qty += cantidad;
				return (i);
			});
	
		} else{

			newCart = cart.concat({
				"id": item.id,
                "title":item.title,
                "image":item.image,
                "price":item.price,
                "description":item.description,
				"qty": cantidad
			});

		}

		setCart(newCart);
	  
    }
    
    return (
        <contextCart.Provider value={{ productosData, categories,cart,handleOnAddItem }}>
            {children}
        </contextCart.Provider>
    )
}

export default CartContextProvider;