import React from 'react'

interface SquareProps {
    value: number | null
    locked: boolean
    lock: (id: number) => void
    id: number
    isGameEnded: boolean
}

export default function Square({ value, locked, id, isGameEnded , lock }: SquareProps ) {
  return (
    <div
    onClick={() => {lock(id)}}
    
    className={`w-9 h-9 m-auto
    ${locked||isGameEnded?'bg-green-400':'bg-white'} 
    rounded-[4px] 
    flex
    items-center
    justify-center
    cursor-pointer
    shadow-[0_2px_2px_rgba(0,0,0,0.15)] 
    `} >
        <div className='inline-block 
        karla
        font-bold
        text-[20.5px]
        leading-[24px]
        select-none
        text-[#2B283A] ' >{value}</div>
    </div>
  )
}
