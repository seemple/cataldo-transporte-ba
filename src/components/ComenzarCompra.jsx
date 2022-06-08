import {Link} from "react-router-dom";

export default function ComenzarCompra() {
    return(
        <div className="mt-6 mx-auto columns-1 text-center">
            <p className="mb-5 ">Aún No hay productos agregados al carrito.</p>
            <Link to={`/`} className="bg-gray-500 w-25 hover:bg-blue-400 text-white py-3 px-4 rounded mt-3">
            ¡Comencemos a comprar!
            </Link>
        </div>
    )
}