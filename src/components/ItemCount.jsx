import React,{useState} from "react";
import {Link} from "react-router-dom";


export default function ItemCount({stock=1,initial=1,item,onAdd}){

    const [count,setCount] = useState(stock);
    const [addedToCart,setAdded] = useState(false);
    
    const incrementar = () =>{
        let newCount = count;
        setCount(newCount < stock ? newCount +=1 : count); 
    };

    const addToCart = (e) =>{
        e.preventDefault();
        onAdd(count,item);
        setAdded(true);
    }

    const keepCart = (e) =>{
        setAdded(false);
    };

    const decrementar = () =>{
        let newCount = count;
        setCount(newCount > parseInt(initial) ? newCount -=1 : parseInt(initial)); 
    };

    return(

        <div className="vertical-center">
            
            <div className="custom-number-input h-10 w-100">
        
                
                {!addedToCart ?

                <>
                <label for="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Cantidad
                </label>

                <div className="flex flex-row h-10 w-100 rounded-lg relative bg-transparent mt-1">
                
                    <button data-action="decrement" onClick={decrementar} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <input type="number" id="" className="outline-none w-50 focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value={count}></input>
                    <button data-action="increment" onClick={incrementar} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                
                    <button data-action="add_cart" onClick={addToCart} className="w-full ml-3 bg-blue-600 text-gray-200 hover:text-gray-700 hover:bg-gray-400 h-full px-2 text-sm bg-gray-100 rounded cursor-pointer">
                            <span className="m-auto font-thin">Agregar al carrito</span>
                    </button>
                
                </div>
                </>
                :
                
                <div className="w-full mt-5">
                    <div class="inline-flex">
                    <button onClick={()=>keepCart()} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Seguir Comprando
                    </button>
                    <Link to="/cart" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
                        Finalizar compra
                    </Link>
                    </div>
                </div>
                
                }
            

            </div>            
        </div>
        
    )
};