import React from 'react'
import { PiShoppingCartSimpleThin } from "react-icons/pi";


const CartWidget = ({valor}) => {
  return (
    <div>
        <PiShoppingCartSimpleThin /> 
        <span>{valor}</span>
    </div>
  )
}

export default CartWidget