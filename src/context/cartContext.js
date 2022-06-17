import { createContext,useContext,useState } from "react";
import productos from "../data";

// Context App Created from React
const contextCart = createContext([]);

// Exported CartContext to easily get data and functions.
export const useCartContext = () => useContext(contextCart);


// Cart Context provider Component with global state, functions and data.

const CartContextProvider = ({children}) =>{

    const productosData = [];
    
    const [cart,setCart] = useState([]);
    const [total,setTotal] = useState(0);
    const [checkedOut,setCheckedOut] = useState(false);

    productos().then(resp => resp.map(item => {
        productosData.push({
            id: item.id,
            ...item.data()
        });
    }));

    const buyer = {
        name: "Juan Martin",
        phone: "5411-345-6789",
        email: "jmcataldo@gmail.com"
    };

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

    const removeAllItems = () => {
        setCart([]);
    }

    const checkOutOrder = () => {
        setCart([]);
        setCheckedOut(true);
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
        <contextCart.Provider value={{ productosData,cart,total,checkedOut, buyer, handleOnAddItem,removeItem,removeAllItems,getTotalCart,checkOutOrder }}>
            {children}
        </contextCart.Provider>
    )
}

export default CartContextProvider;