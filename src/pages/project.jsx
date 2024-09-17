import React from 'react';
import { NavLink } from 'react-router-dom';
import Porfolio from '../components/ui/potfolio';
import { Helmet } from 'react-helmet'; 


export default function Project() {
  // const helmetData = new HelmetData({});
  const helmetContext = {};
  return (
    <div className='mt-12'>
      {/* Add Helmet for managing document head */}
   
      <Helmet >
        <title>Project</title>
        <meta name="description" content="Learn more about us on this page." />
      </Helmet>
    
      
      <div className="px-12">
        <h1 className="text-[2rem] md:text-[4rem] md:max-w-[55rem] font-bold">
          Découvrez nos projets réalisés. 
        </h1>
        <p className="max-w-[24rem] leading- mb-4">
        Des créations uniques adaptées à vos besoins
        </p>
     
      </div>

      <div className="my-12">
        <Porfolio />
      </div>
    </div>
  );
}
