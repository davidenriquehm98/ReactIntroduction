
const Cuadro = ({ valor, alHacerClick, winner }) => {
  return (
    <button
      className={`flex h-52 w-52 justify-center items-center  cursor-pointer hover:bg-cyan-600 ${winner ? 'bg-green-500' : 'bg-cyan-400'}`}
      onClick={() => alHacerClick()} >
      <span className="text-9xl text-center "> { valor } </span>
    </button>
  )
}

export default Cuadro
