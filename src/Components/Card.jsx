import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "motion/react"



const Card = ({data,refence}) => {
  return (
    <motion.div drag dragConstraints={refence} whileDrag={{scale:1.2}} dragElastic={1} className='w-[180px] h-[220px] bg-zinc-900/80 rounded-3xl relative py-5 px-4 text-[#d0cece] shrink-0 overflow-hidden'>
     <FaRegFileAlt/>
     <p className='text-sm mt-5 leading-[1.1]'>{data.desc}</p>
     <div className='absolute bottom-0 left-0 w-full'>
        <div className='flex justify-between items-center w-full px-4 py-4'>
        <h5 className='text-xs'>{data.size}</h5>
        <div className='w-5 h-5 bg-zinc-600 flex justify-center items-center rounded-full'>
        {data.closeIcon? <GoDownload  className='text-xs text-white'/>:<AiOutlineClose className='text-xs text-white'/>}
        </div>
        </div>
          {/* this below code for tag and conditional rendering */}
          { data.tag.isOpen && (
             <div className={`tag w-full ${data.tag.tagColor==="green"? "bg-green-600" : "bg-blue-600"} py-2 flex justify-center items-center`}>
             <p className='text-xs text-white font-semibold'>{data.tag.tagTitle}</p>
           </div>
          )}
         
        
     </div>

    </motion.div>
  )
}

export default Card
