// Hay que importar el context que he creado en el padre 
import {useCartContext} from "../context/cartContext";
import Item from "./Item";
import {useEffect,useState} from "react";
import Checkout from "./Checkout";
import firebaseConnect from "../data/firebase";
import {getFirestore, collection, addDoc, where,query, getDocs} from "firebase/firestore";
import ComenzarCompra from "./ComenzarCompra";
import Loader from "./Loader";

export default function Cart(){
    
    const [order,setOrder] = useState({});
    const [orderId,setOrderId] = useState(null);
    const [loading,setLoading] = useState(false);
    const {cart,checkedOut, total, checkOutOrder, getTotalCart,buyer} = useCartContext()
    const cartTotal = cart.length;
    const [formElement,setFormElement] = useState({});
    
    
    const handleInput = (e) =>{
        const inputName = e.target.name;
        const value = e.target.value;
        setFormElement( values => ({...formElement, [inputName] : value}));
    }

    useEffect(()=>{
        getTotalCart();

        setOrder({
            buyer: formElement,
            total,
            items: cart
        });
        
        firebaseConnect();


    },[getTotalCart,total,cart, formElement]);

    const orderNotExists = async (email) => {
        const db = getFirestore();
        const queryCollection = collection(db,"orders");
        const q = query(queryCollection,where("buyer.email","==",email));
        let ordersQ = await getDocs(q);

        return new Promise( (resolve,reject) =>{
            
            ordersQ.size >=1 ? 
                reject(new Error ("Ya existe una orden con el email ingresado.")) 
            : 
               resolve(true);  
    
        });   
    }

    const createOrder = () =>{
        
        return new Promise((resolve,reject) =>{

            if (cartTotal > 0){
                setOrder({
                    buyer,
                    total,
                    items: cart
                })
                resolve(true);
            } else {
                reject(new Error("No hay productos en el carrito para realizar la orden."));
            }
        });

    }

    const [formErrors,setFormErrors] = useState({});

    const handleCreateOrder = (e) =>{

        e.preventDefault();

        let formIsOk = Object.entries(e.target.elements).every(([name, input]) => input.value !== "" );

        if (formIsOk) { 

            setFormErrors({
                show:false,
                message:null
            });
            setLoading(true);

            orderNotExists(formElement.email).then((resp) =>{

                    createOrder().then(resp =>{
                        const db = getFirestore();
                        const queryCollection = collection(db,"orders");
                        
                        addDoc(queryCollection,order)
                        .then(res => {
                            setOrderId(res.id)
                            console.log(`Nueva orden creada:${res.id}`)
                            setLoading(false)
                        }).catch(err => console.log(err))
                        .finally(res => checkOutOrder());
                    });

            }).catch(err =>{
                setFormErrors({
                    show : true,
                    message : err.message
                });
                setLoading(false);
            });

        } else {
            setFormErrors({
                show:true,
                message: "Asegurese de completar todos los datos del formulario."
            });
        }

    }

    return(
        <div className="container-2xl flex bg-white p-10">

            <div className="w-3/5 p-2 mx-auto">
                
                { 
                loading ? <Loader />
                :
                (cartTotal > 0) ?
                <>
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Este es el estado actual de tu compra en nuestra tienda:</h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                      {cart.map((item,index) => <Item key={index} features={item} isCart={true} />)}
                </div>

                </>
                :
                checkedOut ? <Checkout orderId={orderId} /> : <ComenzarCompra />
                }

            </div>
            
            { (cartTotal > 0) &&
            <div className="w-2/5 p-2">

                {formErrors.show && 
                <div className="bg-red-100 border mb-3 mx-auto border-red-400 text-red-700 px-4 p-3 rounded " role="alert">
                    <span className="block sm:inline ml-2">{formErrors.message}</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                        <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                </div>
                }

                <div className="md:grid grid-cols-1 md:gap-6">
                
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Finalizar compra</h3>
                            <p className="mt-1 text-sm text-gray-600">Ingresa los siguientes datos para enviar tu orden de compra:</p>
                        </div>
                    </div>

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST" onSubmit={handleCreateOrder}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                                
                                <div className="grid grid-cols-6 gap-6">

                                    <div className="col-span-6 sm:col-span-3">
                                        <label for="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                        <input type="text" name="first_name" onChange={handleInput} value={formElement.first_name || ""}  id="first_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label for="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                        <input type="text" name="last_name" onChange={handleInput} id="last_name" value={formElement.last_name || ""}   className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                                        <input type="text" name="email" value={formElement.email || ""}  onChange={handleInput} id="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label for="country" className="block text-sm font-medium text-gray-700">Country</label>
                                        <select id="country" name="country" value={formElement.country || ""}  onChange={handleInput} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>Mexico</option>
                                        </select>
                                    </div>

                                    <div className="col-span-6">
                                        <label for="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                                        <input type="text" name="address"  value={formElement.address || ""}  onChange={handleInput} id="address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                        <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                                        <input type="text" name="city" value={formElement.city || ""}  id="city" onChange={handleInput}  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                                        <input type="text" name="region" value={formElement.region|| ""}  onChange={handleInput} id="region" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label for="postal-code" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                        <input type="text" name="postal_code" value={formElement.postal_code || ""}  onChange={handleInput} id="postal_code" autocomplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                                    </div>

                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" value="send_order" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Finalizar compra</button>
                            </div>
                            </div>
                        </form>
                    </div>
                
                </div>
                
            </div>
            }
            
        </div>
    )
}