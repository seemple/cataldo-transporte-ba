import React, {useState} from "react";
import SidebarCart from "./SidebarCart";

const CartWidget = () =>{

    const [visible,setVisible] = useState(false);

   function mostrarPanel(){
       setVisible((visible === false ? true : false));       
   }
   
   function closePanel(){
        setVisible(false);
    }    


   return (

        <>
        <SidebarCart show={visible} onClose={closePanel} />
        <div className="relative inline-block text-left">
        <div>    
        <button
                onClick={mostrarPanel}
                id="navAction"
                className="inline-flex justify-center w-full bg-orange-400 hover:bg-yellow-300 rounded-md mx-auto lg:mx-0 w-full hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
            >
                Cart
                <svg className="mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
        </button>
        </div>

    </div>
    </>
    );

}

export default CartWidget;