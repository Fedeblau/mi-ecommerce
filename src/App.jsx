import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button/Button'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const[valor, setValor] = useState(0)

  console.log("se renderiza el app")

  return (
    <>
    <NavBar valor={valor}/>
    {/* <div>
      <h1>Hola</h1>
      <Button text="mi primer boton" color="red"/>
      <Button text="mi segundo boton" color="green" />
      <Button text="otro" color="blue"/>
    </div> */}

    <img src='/vite.svg' />
    <ItemListContainer mensaje="estamos resolviendo la entrega para que aprueben todos" fn={setValor}/>
    </>
  )
}

export default App
