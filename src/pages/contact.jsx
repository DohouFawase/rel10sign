import  { useState } from "react";
import Input from "../components/ui/input";
import { Helmet } from 'react-helmet'; 
Helmet

export default function Contact() {
  const [send, setSendata] = useState ({
   email:'',
   name:'',
   message:'',
   service:'',
   budget:''
  })

  const [error, setError] =  useState({})

  const [message , setMessage ] = useState("")

  function handleChange (e) {
    setSendata({
        ...send,
        [e.target.name] : e.target.value
    })
  }

  

  function Validator () {
    let err = {}

    if(send.name === '') {
        err.name = 'Entrez votre Nom & Prénom'
    }
    if(send.email === '') {
        err.email = 'Entrez votre Email'
    }
    if(send.service === '') {
        err.service = 'Entrez un service'
    }
    if(send.budget === '') {
        err.budget = 'le Champ budget Obligatoire'
    }
    if(send.message === '') {
        err.message = 'Ecrivez quelque chose'
    }

    setError(err); 
    return Object.keys(err).length === 0; 
  }
  function handleSubmite (evente) {
    evente.preventDefault()
  let isValid =  Validator()
  if(isValid) {
  console.log(send)

  }


  }
  return (
    
    <>
     <Helmet>
        <title>Contact</title>
        <meta name="description" content="Description for Home Page"/>
      </Helmet>
    

      <div className="mt-12 h-auto">
      <div className="px-12">
        <h1 className="text-[2rem] md:text-[4rem] md:max-w-[55rem] font-bold">
        Nous serions ravis de vous entendre. Prenez contact !
        </h1>
     
      </div>

      <div className="my-12">
        <div className="flex justify-center items-center flex-wrap" >
          <form onSubmit={handleSubmite} className="space-y-3  px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="">
                <Input
                  label={"Nom et Prenom"}
                  type="text"
                  name={"name"}
                  value={send.name}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 p-2 rounded-md md:w-full lg:min-w-[25rem]"
                />
                 {error.name && <p className="text-red-500">{error.name}</p>}
              </div>
              <div className="">
                <Input
                  label={"Votre Mail"}
                  type="email"
                  name={"email"}
                  value={send.email}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 p-2 rounded-md md:w-full lg:min-w-[25rem]"

                />
                 {error.email && <p className="text-red-500">{error.email}</p>}

              </div>
            </div>

            <div className="flex flex-wrap  justify-center gap-4">
              <div className="">
                <Input
                  label={"Service que vous vouliez"}
                  type="text"
                  name={"service"}
                  value={send.service}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 p-2 rounded-md md:w-full lg:min-w-[25rem]"
                />
                 {error.service && <p className="text-red-500">{error.service}</p>}

              </div>
              <div className="">
                <Input
                  label={"Votre Budget"}
                  type="text"
                  name={"budget"}
                  value={send.budget}
                  onChange={handleChange}
                  className="border border-gray-300 px-4 p-2 rounded-md md:w-full lg:min-w-[25rem]"
                />
                 {error.budget && <p className="text-red-500">{error.budget}</p>}

              </div>
            </div>

            <div className="flex flex-col space-y-2 px-4 ">
                <label htmlFor="Messsage" className="font-bold text-medium">Message</label>
                <textarea name="message" id=""  value={send.message}
                  onChange={handleChange}  rows={"8"} className="border flex justify-center border-gray-300  p-2 rounded-md md:w-full lg:min-w-[52rem] "></textarea>
                 {error.message && <p className="text-red-500">{error.message}</p>}

            </div>

            <div className="px-4">
                <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md px-4 font-bold">Envoyez Maintenant</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
    </>
 
  );
}
