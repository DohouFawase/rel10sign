import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Project = [
    {
        id:1,
        image: './img1.jpg',
        title:'Role up'
    },
    {
        id:2,
        image:"./img2.jpg",
        title:'Logo'

    },

    {
        id:3,
        image:"./img3.jpg",
        title:'Flyers'

    },

    {
        id:4,
        image:"./img4.jpg",
        title:'Mockup'

    },
]
export default function ProjectComponents() {
    const [projet, setprojet] = useState(
        Project
    );
  return (
    <div>
       <div className="">
        <div className="">
            <p className='text-sm border my-4 border-gray-400 text-center p- max-w-16 rounded-full p'>Project</p>
            <div className="flex justify-between items-center">
                <p className='text-[2rem] font-bold'>Select Work</p>
                <NavLink>All work</NavLink>
            </div>

            <div className="mt-5">
              <div className="grid md:grid-cols-2 gap-4 justify-center">
                {
                    projet.map((index, x) => {
                        return (
                            <>
                            
                            <div className="overflow-hidden" key={x}>
                            <img src={index.image} alt="" className='w-[755px] hover:skew-x-2 h-[30rem] object-cover rounded-md  ' />
                           <div className="my-2 font-medium">
                            <p>{index.title}</p>
                           </div>
                        </div>
                            </>
                        )
                       
                    })
                }
              </div>
            </div>

        </div>
       </div>
    </div>
  )
}
