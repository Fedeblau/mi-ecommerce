import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import ItemList from './ItemList'
import { getProducts, getProductsByCategory } from '../../data/backend-falso'

const ItemListContainer = ({ mensaje, fn }) => {
  const [products, setProducts] = useState([])
  const [uva, setUva] = useState("")
  const [cargando, setCargando] = useState(false)

  // useEffect(() => {
  //   setCargando(true)
  //   if (uva) {
  //     getProductsByCategory(uva)
  //       .then(res => setProducts(res))
  //       .catch(e => console.error(e))
  //       .finally(()=>setCargando(false))
  //   } else {
  //     getProducts()
  //       .then(res => setProducts(res))
  //       .catch(e => console.error(e))
  //       .finally(()=> setCargando(false))
  //   }
  // }, [uva])



  // fetch('https://fakestoreapi.com/products')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
  
  
  
  useEffect(()=>{
    //async await
    setCargando(true)
    if(uva) {
      fetch(`https://fakestoreapi.com/products/category/${uva}`)
      .then(res=>res.json())
      .then(json=>setProducts(json))
      .finally(setCargando(false))
    }else{
      fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
      .then(res=>setProducts(res))
      .finally(setCargando(false))
    }
  }, [uva])
  






  console.log( products)

  // getProducts().then(res => setProducts(res)).finally(setCargando(false))
  
  // useEffect(() => {
  //   // console.log("con el array de dependencias vacio se ejecuta solo la primera vez")
  //   // console.log("sin n el array de dependencias vacio se ejecuta en cada render ")
  //   console.log("cada vez que cambie uva")

  // }  , [uva] )

  // console.log("se renderiza")


  const changeUva = (uva) => {
    setUva(uva)
  }

  console.log("uva: ", cargando)

  return (
    <>
      <div>
        <div>{mensaje} </div>
        <Button fn={fn} text="agregar al carrito" />
      </div>

      <div>
        <div>
          <Button fn={() => changeUva("malbec")} text="malbec" />
          <Button fn={() => changeUva("men's clothing")} text="ropa de hombre" />
          <Button fn={() => changeUva("jewelery")} text="jewelery" />
          <Button fn={() => setCargando(true)} text="cargar" />

        </div>
        {
          cargando
            ?
            <h1>Cargando ... </h1>
            :
            <ItemList products={products} />
        }
      </div>
    </>

  )
}

export default ItemListContainer