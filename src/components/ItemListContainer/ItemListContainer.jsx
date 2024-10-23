import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import ItemList from './ItemList'
import { getProducts, getProductsByCategory } from '../../data/backend-falso'

const ItemListContainer = ({ mensaje, fn }) => {
  const [products, setProducts] = useState([])
  const [uva, setUva] = useState("")
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setCargando(true)
    if (uva) {
      getProductsByCategory(uva)
        .then(res => setProducts(res))
        .catch(e => console.error(e))
        .finally(setCargando(false))
    } else {
      getProducts()
        .then(res => setProducts(res))
        .catch(e => console.error(e))
        .finally(setCargando(false))
    }
  }, [uva])

  const changeUva = (uva) => {
    setUva(uva)
  }

  console.log("uva: ", uva)



  return (
    <>
      <div>
        <div>{mensaje} </div>
        <Button fn={fn} text="agregar al carrito" />
      </div>

      <div>
        <div>
          <Button fn={() => changeUva("malbec")} text="malbec" />
          <Button fn={() => changeUva("tinto")} text="tinto" />
          <Button fn={() => changeUva("torrontes")} text="torrontes" />
          <Button fn={() => changeUva("")} text="todas" />

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