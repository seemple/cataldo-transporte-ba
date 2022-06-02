import ItemDetail from "./ItemDetail";
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import {useCartContext} from "../context/cartContext";
import firebaseConnect from "../data/firebase";
import {doc,getDoc,getFirestore} from "firebase/firestore";



const getItem = (itemId=null) =>{

  firebaseConnect();
  const db = getFirestore();
  let selectedItem = null;
  let dbQuery = null;

  if (itemId) {
    dbQuery = doc(db,"productos",itemId); 
    selectedItem = getDoc(dbQuery).then(response => {
      return({
        id: response.id,
        ...response.data()
      })
    });
  }
  
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{
      selectedItem ? resolve(selectedItem) : reject(new Error("No se encontró el producto seleccionado"));
    },2000);
  });

}


export default function ItemDetailContainer(){

    const [product,setProduct] = useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);
    const {itemId} = useParams();

    useEffect(()=>{
      
      getItem(itemId)
          .then(res => setProduct(res))
          .catch(err => setError(true))
          .finally(res => setLoading(false));
    },[itemId]);
  
    return ( loading ? <Loader /> : <ItemDetail item={product} hasError={error} /> )

}