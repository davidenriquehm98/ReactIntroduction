const Tablero = () => {
  return (
    <div className="min-h-screen bg-slate-800 ">
      <h1 className="text-8xl text-center mb-5 font-extrabold text-neutral-50 ">TOTITO</h1>
      <div className="grid grid-rows-3 grid-flow-col gap-1 justify-center items-center">

        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">1</div>
        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">2</div>
        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">3</div>

        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">4</div>
        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">5</div>
        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">6</div>

        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">7</div>
        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">8</div>
        <div className="w-52 h-52 rounded-md text-9xl bg-cyan-400 text-center cursor-pointer hover:bg-cyan-600">9</div>

      </div>
    </div>
  )
}

export default Tablero