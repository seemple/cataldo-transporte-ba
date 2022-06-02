import { createContext,useContext,useState } from "react";
import productos from "../data";

// Creamos el contexto de la App.
const contextCart = createContext([]);

// Exporto el useContext para consumir los datos facilmente y ahorrar imports.
export const useCartContext = () => useContext(contextCart);


// Creamos el provider con estado y funciones globales. 
const CartContextProvider = ({children}) =>{

    
    // Aca van estado y funciones globales

    const productosData = [];
    
    productos().then(resp => resp.map(item => {
        productosData.push({
            id: item.id,
            ...item.data()
        });
    }));

   
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);

    const isInCart = (id) => {
        return (cart.find( i => i.id == id)) 
    };

    const getTotalCart = () =>{
        let totalCart = cart.reduce((prev,next)=>{
            let nextPrice = next.qty * next.price
            return (prev+nextPrice);
        },0)
        setTotal(totalCart);
    }
    
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const removeAllItems = (id) => {
        setCart([]);
    }

	const handleOnAddItem = (cantidad,item) =>{

		let newCart = [];

		
		if(isInCart(item.id)) {
			
			newCart = cart.map((i) => {
				if(i.id == item.id) i.qty += parseInt(cantidad);
				return (i);
			});
	
		} else{

			newCart = cart.concat({
				"id": item.id,
                "title":item.title,
                "image":item.image,
                "price":item.price,
                "description":item.description,
				"qty": parseInt(cantidad)
			});

		}

		setCart(newCart);
	  
    }
    
    return (
        <contextCart.Provider value={{ productosData,cart,total,handleOnAddItem,removeItem,removeAllItems,getTotalCart }}>
            {children}
        </contextCart.Provider>
    )
}

export default CartContextProvider;