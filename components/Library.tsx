"use client"
import React from 'react'
import {TbPlaylist} from "react-icons/tb"
import {AiOutlinePlus}  from "react-icons/ai"
type Props = {}

const Library = (props: Props) => {
 const clickHandler = () => { 

  }
      return (
    <div className='flex flex-col'>
      <div className="flex item-center justify-between px-5 pt-4">
            <div className="inline-flex items-center gap-x-2">
                  <TbPlaylist className="text-neutral-400" size={26}/>
                  <p className='text-nutral-400 font-medium text-md'>your library</p>

            </div>
            <AiOutlinePlus className="text-neutral-400 cursor-pointer hover:text-white transition"/>
      </div>
      <div className="flex flex-col mt-4 px-3 py-2">
            
      </div>
    </div>
  )
}

export default Library