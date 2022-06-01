import firebaseConnect from "../data/firebase";
import {getFirestore, getDocs, collection} from "firebase/firestore";

function productos(){
  
  firebaseConnect();
  const db = getFirestore();

  const queryCollection = collection(db,"productos");
  return (getDocs(queryCollection).then(resp => resp.docs));

};

export default productos;