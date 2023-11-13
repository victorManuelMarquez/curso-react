import { useRef, useState } from "react"
import DecrementarContador from "./components/DecrementarContador"

const App = () => {

  // declaro un array y lo cargo con datos
  let array = []
  for (let i=0; i<8; i++) {
    array[i] = "dato " + (i + 1)
  }

  // Mi primer Hook
  const [cont, setCont] = useState(0) // useState() es un "rastreador" para mi variable contador

  // evento al presionar el botón para incrementar
  const btnClick = () => {
    setCont(cont + 1)
  }

  const inputRef = useRef(null)
  const [dato, setDato] = useState([])

  return (
    <div>
      <h2>Imprimir los datos de un array</h2>
      {array.map(value => {return <h4>{value}</h4>})}
      <button onClick={() => {btnClick()}}>Incrementar el contador</button>
      <h4>Contador : {cont}</h4>
      <button onClick={() => {setCont(0)}}>Reiniciar el contador</button>
      <DecrementarContador data={cont} fn={setCont}/>
      <div>
        <br />
        <input type="text" name="" id="" ref={inputRef} />
        <button type="submit" onClick={() => {setDato([...dato, inputRef.current.value])}}>Ingresar</button>
        {dato.map((valor, indx) => {return <h3 key={indx}>{valor}</h3>})}
      </div>
    </div>
  )
}

export default App