// Hay que importar el context que he creado en el padre 
import {useCartContext} from "../context/cartContext";
import Item from "./Item";
import {useEffect,useState} from "react";
import Checkout from "./Checkout";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import ComenzarCompra from "./ComenzarCompra";
import Loader from "./Loader";

export default function Cart(){
    
    const [order,setOrder] = useState({});
    const [orderId,setOrderId] = useState(null);
    const [loading,setLoading] = useState(false);
    const {cart,checkedOut, total, checkOutOrder, getTotalCart,buyer} = useCartContext()
    const cartTotal = cart.length;
    
  

    useEffect(()=>{
        getTotalCart();

        setOrder({
            buyer,
            total,
            items: cart
        })
    },[getTotalCart,total,cart, buyer]);

    const createOrder = () =>{
        
        return new Promise((resolve,reject) =>{
            if (cartTotal > 0){
                setOrder({
                    buyer,
                    total,
                    items: cart
                })
                resolve(true);
            } else {
                reject(new Error("No hay productos en el carrito para realizar la orden."));
            }
        });

    }

    
    const handleCreateOrder = (e) =>{
        e.preventDefault();

        setLoading(true);

        createOrder().then(resp =>{
        
            const db = getFirestore();
            const queryCollection = collection(db,"orders");
            
            addDoc(queryCollection,order)
            .then(res => {
                setOrderId(res.id)
                console.log(`Nueva orden creada:${res.id}`)
                setLoading(false)
            }).catch(err => console.log(err))
            .finally(res => checkOutOrder());

        }) .catch(err =>console.log(err))
        
    }

    return(
            <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                
                { 
                loading ? <Loader />
                :
                (cartTotal > 0) ?
                <>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Este es el estado actual de tu compra en nuestra tienda:</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {cart.map((item,index) => <Item key={index} features={item} isCart={true} />)}
                </div>

                <div className="mt-6 mx-auto columns-1 text-center">
                     <button onClick={handleCreateOrder} className="rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700">Finalizar compra</button>
                </div>
                </>
                :
                checkedOut ? <Checkout orderId={orderId} /> : <ComenzarCompra />
                }

            </div>
        </div>
    )
}