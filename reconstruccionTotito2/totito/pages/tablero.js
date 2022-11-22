import { useContext, useState } from 'react'
import { AlertContext } from '../context/AlertProvider'
import Cuadro from './cuadro'


const Tablero = () => {
  const [cuadros, setCuadros] = useState(Array(9).fill(''))
  const [turno, setTurno] = useState('X')
  const [posG1, setPos1] = useState(-1)
  const [posG2, setPos2] = useState(-1)
  const [posG3, setPos3] = useState(-1)
  const [ganador, setGanador] = useState('')

  const alert = useContext(AlertContext)

  const pintaFigura = (indexItem) => {
    const misCuadritos = cuadros.slice()
    if (ganador != null && ganador) {
      alert.show('Juego Terminado', `Ya ha ganado el ${ganador}`)
    } else if (misCuadritos[indexItem] !== '') {
      alert.show('Tablero', 'Casilla ya fue clickeada')
    } else {
      misCuadritos.splice(indexItem, 1, turno)
      setCuadros(misCuadritos)

      const valGanador = calcularGanador(misCuadritos)
      setGanador(valGanador)

      if (turno === 'X') {
        setTurno('O')
      } else {
        setTurno('X')
      }
    }
  }

  const calcularGanador = (myTablero) => {
    const jugadasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let indiceJugada = 0; indiceJugada < jugadasGanadoras.length; indiceJugada++) {
      const [a, b, c] = jugadasGanadoras[indiceJugada]
      if (myTablero[a] && myTablero[a] === myTablero[b] && myTablero[a] === myTablero[c]) {
        setPos1(a)
        setPos2(b)
        setPos3(c)
        return myTablero[a]
      }
    }
    return ''
  }

  const isWinner = (indexItem) => {
    if (indexItem === posG1 || indexItem === posG2 || indexItem === posG3) {
      return true
    }
    return false
  }

  const reiniciarJuego = () => {
    setCuadros(Array(9).fill(''))
    setPos1(-1)
    setPos2(-1)
    setPos3(-1)
    setGanador('')
  }

  return (
    <div className="min-h-screen bg-slate-800 items-center">
      <h1 className="text-8xl text-center mb-5 font-extrabold text-neutral-50 ">TOTITO</h1>
      <div className="flex w-full justify-center">
        <span className="flex w-1/4 py-2 text-white text-lg font-medium">{`El Turno es de ${turno}`}</span>
        <span className="flex w-1/4 py-2 text-white text-lg font-medium">{`El Ganador es: ${ganador}`}</span>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-1 justify-center items-center">
        {
          cuadros.map((item, indexItem) => {
            return <Cuadro
              key={indexItem}
              valor={item}
              alHacerClick={() => pintaFigura(indexItem)}
              winner={isWinner(indexItem)} />
          })
        }
      </div>
      <div className="flex w-full justify-center">
        <button className="flex w-40 py-2 bg-orange-500 my-2 px-6 text-lg font-medium" onClick={() => reiniciarJuego()}>{`Reiniciar Juego`}</button>
      </div>
    </div>
  )
}

export default Tablero