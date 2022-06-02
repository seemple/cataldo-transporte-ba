import {Link} from "react-router-dom";
import {useCartContext} from "../context/cartContext";


export default function Item({features,isCart=false}) {

    const {removeItem} = useCartContext();

    return(    
        <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src={features.image} alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <Link to={`/product/${features.id}`}>
                    
                    {features.title}
                </Link>
                </h3>
                {features.category || <p className="mt-1 text-sm text-gray-500 mb-2">{features.category}</p>}
                { isCart &&
                        <> 
                        <p className="mt-1 text-sm text-gray-500">{`Cantidad: ${features.qty} unidades`}</p>
                        <p className="mt-1 text-sm text-gray-500 font-semibold">{`Subtotal: $${features.qty * features.price}`}</p>
                        <button onClick={()=>removeItem(features.id)} className="bg-gray-500 hover:bg-blue-400 text-white text-sm py-2 px-3 rounded mt-3">Quitar [X]</button>
                        </>
                }
            </div>
            <div>
            <p className="text-sm font-medium text-gray-900">${features.price}</p>
            </div>
        </div>
    </div>
    );
}