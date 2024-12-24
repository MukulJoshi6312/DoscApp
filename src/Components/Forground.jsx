import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {

    const ref = useRef(null);


    const data = [
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            size: ".8mb",
            closeIcon: false,
            tag:{isOpen:true,tagTitle:"Upload",tagColor:"green"}

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            size: ".9mb",
            closeIcon: true,
            tag:{isOpen:false,tagTitle:"Download Now",tagColor:"blue"}

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            size: "2.1mb",
            closeIcon: false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur .",
            size: ".6mb",
            closeIcon: true,
            tag:{isOpen:true,tagTitle:"Upload",tagColor:"blue"}

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            size: ".8mb",
            closeIcon: false,
            tag:{isOpen:true,tagTitle:"Upload",tagColor:"green"}

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            size: ".9mb",
            closeIcon: true,
            tag:{isOpen:false,tagTitle:"Download Now",tagColor:"blue"}

        },
        {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            size: "2.1mb",
            closeIcon: false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}

        }

    ]


    return (
        <div ref={ref} className='fixed top-0 left-0  h-full w-full  p-5 z-10 flex gap-5 flex-wrap overflow-hidden'>
            {/* <Card data={data}/> */}
            {data.map((item,index)=>(
                <Card data={item} refence={ref}/>
            ))}
        </div>
    )
}

export default Forground
