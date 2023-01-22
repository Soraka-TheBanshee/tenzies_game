import React from 'react'

interface RollBtnProps {
    isGameEnded: boolean
    roll: () => void
}

export default function RollBtn({ isGameEnded, roll }: RollBtnProps) {
  return (
    <button
    onClick={roll}

    className='
    mt-6
    h-[36px]
    rounded
    bg-[#5035FF]
    px-[30px]
    karla
    font-bold
    text-white
    text-[16px]
    leading-[19px]
    shadow-[1px_1px_4px_gray]
    hover:shadow-[1px_2px_4px_1px_gray]
    active:shadow-[0_0_3px_gray]
    transition-shadow duration-100 ' >{isGameEnded?'New Game':'Roll'}</button>
  )
}
