import { productos } from "../data/oldMockupData";
import {Link} from "react-router-dom";
import {useEffect,useState} from "react";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import firebaseConnect from "../data/firebase";

const productosData = productos();

const ImportData = () =>{

    const [imported,setImported] = useState(false);
    const [prods,setProds] = useState([]);

    
    const insertDocs = async () =>{

        for (let producto of productosData) {
            const db = getFirestore();
            const queryCollection = collection(db,"productos");
            const res = await addDoc(queryCollection,{...producto});
            setProds(prods =>[...prods,producto]);
        };

    }

    const handleInsertDocs = (e) =>{
        e.preventDefault();
        insertDocs();
        setImported(true);
    }

    useEffect(() => {

        firebaseConnect();

    });

     
    return(
        <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-6 mx-auto columns-1 text-center">
            
            <>
            {imported ||
            <p className="mb-5 ">No se han importado productos.</p>
            }
            </>

            {imported || <button onClick={handleInsertDocs} className="bg-gray-500 w-25 hover:bg-blue-400 text-white py-3 px-4 rounded mt-3">¡Comencemos a importar!</button>}

            <> 
          
            {prods.length>0 && prods.map((item,index) => <p key={index} className="mt-3">Producto {item.title} <strong>importado</strong> correctamente.</p>)}
            {imported && <p className="mt-5"><Link to={`/`} className="bg-gray-500 w-25 hover:bg-blue-400 text-white py-3 px-4 rounded mt-3">
            ¡Volver al inicio!
            </Link></p>
            }

            </>
            
        </div>

        </div>
        </div>
    );
}

export default ImportData;