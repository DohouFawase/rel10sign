import { motion } from "framer-motion";
import { useState } from "react"
import { NavLink } from "react-router-dom";

const Princig =[
    {
        service: "Brand Design",
        tarif: "500€ - 1500€",
        description: "Création complète de l'identité visuelle (logo, couleurs, typographie), charte graphique et guidelines.",
        ceQueVousObtenez: [
          "Définition complète de l'image de marque",
          "Développement d'une identité visuelle cohérente qui se démarque",
          "Livre de marque fourni pour garantir une utilisation cohérente"
        ]
      },
      {
        service: "Visual Design",
        tarif: "300€ - 1000€",
        description: "Conception d'éléments graphiques (bannières, brochures, visuels réseaux sociaux) adaptés à vos besoins.",
        ceQueVousObtenez: [
          "Designs professionnels pour améliorer l'apparence de vos supports visuels",
          "Expérience utilisateur optimisée pour maximiser l'impact de vos visuels"
        ]
      },
      {
        service: "Logo Design",
        tarif: "200€ - 800€",
        description: "Création d'un logo unique et sur mesure, avec 3 propositions initiales et 2 révisions incluses.",
        ceQueVousObtenez: [
          "Logo personnalisé et mémorable qui reflète l'essence de votre entreprise",
          "Révisions incluses pour s'assurer que le logo corresponde exactement à vos attentes"
        ]
      },
      {
        service: "Packaging Design",
        tarif: "400€ - 1200€",
        description: "Design d'emballages créatifs et fonctionnels, avec rendus 3D et fichiers prêts pour impression.",
        ceQueVousObtenez: [
          "Packaging unique et attractif qui met en valeur vos produits et attire l'attention en magasin",
          "Assistance technique pour l'impression, afin de garantir un rendu de haute qualité"
        ]
      }
]




export default function Pricing() {
    const [state, setstate] = useState(
        Princig
    );

    const handleDragEnd = (event, info, index) => {
      const offset = Math.round(info.offset.x / 100); // Adjust the divisor to change sensitivity
      const newIndex = index + offset;
  
      if (newIndex >= 0 && newIndex < state.length) {
        const updatedState = [...state];
        const [movedItem] = updatedState.splice(index, 1);
        updatedState.splice(newIndex, 0, movedItem);
        setstate(updatedState);
      }
    };
  
    console.log(state)

  return (
    <div>
        <div className="mt-12">
            <div className="">
                <h1 className='text-[2rem] md:text-[4rem] md:max-w-[55rem] font-bold'>We 've got a plan that's perfect for You</h1>
            </div>
        </div>
      <div className="">
       <div className="py-12">
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-3 ">
            {
             state.map((index,x) => {
                return(
                    <>
                    <motion.div
                   drag="x"
                   dragConstraints={{ left: -100, right: 100 }}
                   onDragEnd={(event, info) => handleDragEnd(event, info, index)}

                     className="bg-white border border-gray-300 hover:shadow-md pla   p-4 rounded-md" key={x}>
                        <div className="space-y-4">
                            <h2 className="font-bold text-xl">{index.service}</h2>
                            <p><span>Tarif</span>: {index.tarif}</p>
                            <p>{index.description}</p>
                        </div>
                        <div className="space-y-2 mt-2">
                        <p>Ce que vous obtenez :</p>

                            <ul className="space-y-4 px-2 my-2">
                            {index.ceQueVousObtenez.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
                            </ul>

                        </div>
                    </motion.div>
                    
                    </>
                )
             })   
            }
        </div>
       </div>

      </div>

   
    </div>
  )
}
