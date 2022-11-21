const Tablero = () => {
  return (
    <div className="grid grid-cols-3 gap-1 " >
      {/* usaremos temporalmente unos div */}
      <div className="h-5 w-5 bg-blue-400">1</div>
      <div className="h-5 w-5 bg-blue-400">2</div>
      <div className="h-5 w-5 bg-blue-400">3</div>
      
      <div className="h-5 w-5 bg-blue-400">4</div>
      <div className="h-5 w-5 bg-blue-400">5</div>
      <div className="h-5 w-5 bg-blue-400">6</div>
      
      <div className="h-5 w-5 bg-blue-400">7</div>
      <div className="h-5 w-5 bg-blue-400">8</div>
      <div className="h-5 w-5 bg-blue-400">9</div>

    </div>
  )
}

export default Tablero