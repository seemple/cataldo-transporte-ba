import React, {useState} from "react";

const CartWidget = () =>{

    const [visible,setVisible] = useState(false);

   function mostrarDropdown(){
       setVisible((visible === false ? true : false));       
   }
   
   return (
    <div className="relative inline-block text-left">
        <div>    
        <button
                onClick={mostrarDropdown}
                id="navAction"
                className="inline-flex justify-center w-full bg-orange-400 hover:bg-yellow-300 rounded-md mx-auto lg:mx-0 w-full hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
            >
                Cart
                <svg className="mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
        </button>
        </div>

        <div className={`${!visible ? "hidden" : ""} origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div className="py-1" role="none">
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:underline" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:underline" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
            <a href="#" className="text-gray-700 block px-4 py-2 text-sm hover:underline" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
            <form method="POST" action="#" role="none">
                <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:underline" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
            </form>
            </div>
        </div>

    </div>
    );

}

export default CartWidget;