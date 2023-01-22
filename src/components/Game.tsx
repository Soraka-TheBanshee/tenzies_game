import React, { useState, useEffect } from 'react'
import RollBtn from './game/RollBtn'
import Square from './game/Square'
import getRandomInt from '../modules/randomNumber'

interface ISquares {
    value: number | null
    locked: boolean
}

export default function Game() {
    const [squares, setSquares] = useState<ISquares[]>([
        {value: null, locked: false}, {value: null, locked: false}, {value: null, locked: false}, {value: null, locked: false}, {value: null, locked: false},
        {value: null, locked: false}, {value: null, locked: false}, {value: null, locked: false}, {value: null, locked: false}, {value: null, locked: false}
    ])

    const [isGameEnded, setGameEnded] = useState(false)

    const lock = (id:number) => {
        setSquares(squares => squares.map((square, sqid) =>
            sqid === id?
            {...square, locked: !square.locked}:
            square)
        )
    }

    useEffect(() => {
        const i = squares[0].value
        let gameDone = false
        for (const square of squares) {
            if (square.value !== i || square.value === null) {
                gameDone = false
                break
            }
            gameDone = true
        }
        if (gameDone) {
            setGameEnded(gameDone)
        }
        
    }, [squares])
    
    const roll = () => {
        

        
        if (isGameEnded) {
            setSquares(squares => {
                const newSquares = squares.map(() => ({locked: false, value: getRandomInt(7)}))
                return newSquares
            })

            setGameEnded(false)
        
        } else {
            setSquares(squares => {
                const newSquares = squares.map(square => square.locked?square:{...square, value: getRandomInt(7)})
                return newSquares
            })
        }

    }

  return (
    <>
        <div className='
        mt-6
        grid
        grid-cols-5
        gap-y-5 ' >
            {squares.map((square, id) => <Square key={id} value={square.value} locked={square.locked} lock={lock} id={id} isGameEnded={isGameEnded} />)}
        </div>
        <div className='flex justify-center' >
            <RollBtn isGameEnded={isGameEnded} roll={roll} />
        </div>
    </>
  )
}
