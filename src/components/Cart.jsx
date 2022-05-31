// Hay que importar el context que he creado en el padre 
import {useCartContext} from "../context/cartContext";
import Item from "./Item";

export default function Cart(){
    

    const {cart} = useCartContext()

    return(

           <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Este es el estado actual de tu compra en nuestra tienda:</h2>

                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                      {cart.map((item,index) => <Item key={index} features={item} isCart="true" />)}
                </div>

            </div>
        </div>

    )
}