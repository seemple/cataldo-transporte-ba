import firebaseConnect from "../data/firebase";
import {getFirestore, getDocs, collection} from "firebase/firestore";

function productos(){
  
  firebaseConnect();
  const db = getFirestore();

  const queryCollection = collection(db,"productos");
  return new Promise((resolve,reject)=>{  
    db ? resolve(getDocs(queryCollection).then(resp => resp.docs)) : reject(new Error("No se pudo conectar a firebase"));
  });

};

export default productos;