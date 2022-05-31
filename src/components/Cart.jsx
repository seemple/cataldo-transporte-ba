// Hay que importar el context que he creado en el padre 
import {useCartContext} from "../context/cartContext";
import {Link} from "react-router-dom";
import Item from "./Item";

export default function Cart(){
    

    const {cart} = useCartContext()
    const cartTotal = cart.length;

    return(

           
            <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                { (cartTotal > 0) ?
                <>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Este es el estado actual de tu compra en nuestra tienda:</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {cart.map((item,index) => <Item key={index} features={item} isCart={true} />)}
                </div>
                </>
                :
                <div className="mt-6 mx-auto columns-1 text-center">
                      <p className="mb-5 ">Aún No hay productos agregados al carrito.</p>
                      <Link to={`/`} className="bg-gray-500 w-25 hover:bg-blue-400 text-white py-3 px-4 rounded mt-3">
                        ¡Comencemos a comprar!
                      </Link>
                </div>
                }

            </div>
        </div>

    )
}