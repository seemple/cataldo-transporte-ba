import { productos } from "../data/oldMockupData";
import {Link} from "react-router-dom";
import {useEffect,useState} from "react";
import {getFirestore, collection, addDoc} from "firebase/firestore";
import firebaseConnect from "../data/firebase";

const productosData = productos();

const ImportData = () =>{

    const [imported,setImported] = useState(false);

    const insertDocs = () =>{

        productosData.map(async(item)=>{
            
            const db = getFirestore();
            const queryCollection = collection(db,"productos");
            const res = await addDoc(queryCollection,{...item});

            console.log(`Producto ${res.title} importado correctamente.`);
            return(`Producto ${res.title} importado correctamente.`);
    
        });

        setImported(true);
        
    }

    useEffect(() => {

        firebaseConnect();
    
    });

     
    return(
        <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="mt-6 mx-auto columns-1 text-center">
            {!imported ?
            <>
            <p className="mb-5 ">No se han importado productos.</p>
            <button onClick={()=>insertDocs()} className="bg-gray-500 w-25 hover:bg-blue-400 text-white py-3 px-4 rounded mt-3">
            ¡Comencemos a importar!
            </button>
            </>
            :
            <>
            <p className="mb-5 ">Importación finalizada.</p>
            <Link to={`/`} className="bg-gray-500 w-25 hover:bg-blue-400 text-white py-3 px-4 rounded mt-3">
            ¡Volver al inicio!
            </Link>
            </>
            }
        </div>

        </div>
        </div>
    );
}

export default ImportData;