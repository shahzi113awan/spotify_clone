"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
      children:React.ReactNode,
      className:string
}

const Header = (props: Props) => {
      const router = useRouter()
  return (
    <div className={twMerge('h-fit bg-gradient-to-b from-emerald-800 p-6')}>
      <div className="w-full mb-4 flex items-center justify-center">
            <div className="hidden md:flex gap-x-2 items-center"></div>
      </div>
    </div>
  )
}

export default Header