import {Link} from "react-router-dom";

export default function Item({key,features}) {
    return(    
        <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img src={features.image} alt="Front of men&#039;s Basic Tee in black." className="w-full h-full object-center object-cover lg:w-full lg:h-full" />
        </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm text-gray-700">
                <Link to={`/product/${features.id}`}>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {features.title}
                </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{features.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${features.price}</p>
        </div>
    </div>
    );
}