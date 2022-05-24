import ItemList from "./ItemList";
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

// Hay que importar el context que he creado en el padre 
import {useCartContext} from "../context/cartContext";


export default function ItemListContainer(){

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const {categoryId=null} = useParams();

    // Aqui ya "consumo" la data del context
    const {productosData} = useCartContext()

    // Esta promesa procesa los datos del context
    const getProds = (categoryId=null) =>{

      let selectedItems = categoryId ? productosData.filter((item)=> item.category == categoryId) : productosData;
      return new Promise((resolve,reject)=>{  
        setTimeout(()=>{
          selectedItems ? resolve(selectedItems) : reject(new Error("No se encontraron los productos seleccionados"));
        },2000);
      });

    }

    useEffect(()=>{
          getProds(categoryId)
          .then(res=>{
            setProducts(res)
          })
          .catch(err =>setError(true))
          .finally(res => setLoading(false));
    },[categoryId]);
  
    return ( loading ? <Loader /> : <ItemList items={products} /> )

}