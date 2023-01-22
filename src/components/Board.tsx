import React from 'react'

export default function Board({ children }: { children?: React.ReactNode } ) {
  return (
    <div className='w-[360px] 
    h-[379px] 
    mt-10 mx-auto mb-10
    bg-[#0B2434]
    px-[20px]
    py-[30px]
     ' >
        <div className='h-full bg-[#F5F5F5] rounded-[10px] p-9' >
            {children}
        </div>
    </div>
  )
}
