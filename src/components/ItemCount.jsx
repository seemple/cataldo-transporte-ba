export default function ItemCount(){

    return(
        <div className="vertical-center">
            <div className="custom-number-input h-10 w-32">
                <label for="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Cantidad
                </label>
                <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button data-action="decrement" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                    <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
                <button data-action="increment" className="w-100 bg-slate-500 text-gray-200 hover:text-gray-700 hover:bg-gray-400 h-full px-2 text-sm mt-2 bg-gray-100 rounded cursor-pointer">
                        <span className="m-auto font-thin">Agregar al carrito</span>
                </button>
            </div>
        </div>
    )
};