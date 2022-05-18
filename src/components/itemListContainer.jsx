import ItemList from "./ItemList";
import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { productos } from "../data";

import Loader from "./Loader";
const productosData = productos();

const getProds = (categoryId=null) =>{

  let selectedItems = categoryId ? productosData.filter((item)=> item.category == categoryId) : productosData;
  return new Promise((resolve,reject)=>{  
    setTimeout(()=>{
      selectedItems ? resolve(selectedItems) : reject(new Error("No se encontraron los productos seleccionados"));
    },2000);
  });

}

export default function ItemListContainer(){

    const [cart,setCart] = useState([]);
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const {categoryId=null} = useParams();


    const handleOnAddItem =  (cantidad) =>{
      let newCart = cart.concat({
        "qty": cantidad
      });
      setCart(newCart);
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