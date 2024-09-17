import React, { useEffect, useState } from 'react'

const ListSevices = [
    {
        id: 1,
        title: "Brand Design",
        desc: " Création d'une identité visuelle cohérente pour représenter l'image de marque d'une entreprise"
    },
    {
        id: 2,
        title: "Visual Design",
        desc: "Conception d'éléments graphiques esthétiques et fonctionnels pour améliorer l'expérience visuelle"
    },

    {
        id: 3,
        title: "Packaging Design",
        desc: " Conception d'emballages attractifs et informatifs pour promouvoir un produit en magasin."
    },

    {
        id: 4,
        title: "Logo Design",
        desc: " Création d'un symbole visuel unique pour identifier et différencier une marque"
    }
]
export default function ServicesComponents() {
    const [services, setservices] = useState(
        ListSevices
    );

   
  return (
    <div className='my-12'>

        <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-3">
                {
                    services.map((index, x) =>  {
                      
                        return (
                            <>
                            
                             <div key={x} className="w-[300px]   bg-gray-200 p-6 rounded-md hover:shadow-md">
                                <p className='mb-2 font-bold hover:underline '> {index.title} </p>
                                <p> {index.desc} </p>
                             </div>
                            
                            </>
                        )

                    })
                }
              
            </div>
        </div>
      
    </div>
  )
}
