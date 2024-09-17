import { NavLink } from "react-router-dom"
import ServicesComponents from "../components/website/servicesComponents"
import ProjectComponents from "../components/website/projectComponents"
import Pricing from "../components/website/pricing"
import { useEffect, useRef } from "react"
import { useInView, motion } from "framer-motion"
import { Helmet } from 'react-helmet'; 


export default function Homepage() {

const ref =  useRef(null)
const isInview = useInView(ref, {
  amount:'some'
})

useEffect(() => {
  console.log(`The elementt ${isInview ? "is" :"iS NOT "} IN VIEW`)
}, [isInview])

// const helmetData = new HelmetData({});

  return (
    
    <motion.div ref={ref} className="mt-12 overflow-hidden">
      
       <Helmet >
        <title>Rel-10sign</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
       <motion.div
      animate={{ opacity: 1, y: 0 }}
       
       initial={{ opacity: 0, y: -100 }}
       transition={{
        // duration:6
        type:"spring",
        stiffness:100

       }}
       className="px-12 ">
           <h1 className="text-[2rem] md:text-[4rem] md:max-w-[55rem] font-bold">Créons ensemble votre marque, une réussite à la fois.</h1>
           <p className="max-w-[24rem] leading- mb-4  ">Façonnez une marque puissante. Nous vous guidons pour révéler et exprimer votre message distinctif</p>
            <NavLink  className={"bg-black rounded-full p-2 text-center text-white"}>Ours services</NavLink>
       </motion.div>

       <motion.div
       initial={{ opacity: 0, x: -100 }} 
       animate={{ opacity: 1, x: 0 }} 
       transition={{ duration: 2 ,
        
       }}
       className="">
       <ServicesComponents />
       </motion.div>


       <motion.div
        initial={{ opacity: 0, x: 100 }} // start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // end at its natural position
        transition={{ duration: 4 }}
       className="px-12">
       <ProjectComponents />
       </motion.div>

       <div className="px-12">
       <Pricing />
       </div>
    </motion.div>
  )
}
