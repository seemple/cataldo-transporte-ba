import ItemDetail from "./ItemDetail";
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import {useCartContext} from "../context/cartContext";

const getItem = (itemId=null,productos) =>{


  let selectedItem = itemId ? productos.find((item)=> item.id == itemId) : null;
  
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
    const {productosData} = useCartContext();


    useEffect(()=>{
      
      getItem(itemId,productosData)
          .then(res => setProduct(res))
          .catch(err => setError(true))
          .finally(res => setLoading(false));
    },[itemId]);
  
    return ( loading ? <Loader /> : <ItemDetail item={product} hasError={error} /> )

}