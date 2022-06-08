import {Link} from "react-router-dom";

export default function Checkout({orderId=null}) {
    return(

            <div className="mt-6 mx-auto columns-1 text-center">
                <h2 className="text-2xl mb-3 font-extrabold">¡Gracias por tu compra!</h2>
                <p className="mb-5 ">Tu N° de Orden es <strong>{orderId}</strong></p>
                <Link to={`/`} className="bg-gray-500 w-25 hover:bg-blue-400 text-white py-3 px-4 rounded mt-5">
                Regresar al inicio
                </Link>
            </div>

    )
}