// Mi primer componente
const DecrementarContador = ({data, fn}) => {
  return (
    <div>
      <br />
      <button onClick={() => {fn(data - 1)}}>Decrementar contador</button>
    </div>
  )
}

export default DecrementarContador