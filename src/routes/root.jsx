
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/homepage";
import Layouts from "../layouts/layouts";
import Project from "../pages/project";
import Contact from "../pages/contact";



const root =createBrowserRouter([
  {
    path:"",
    element: <Layouts />,
    children:[
        {
            path: "",
            element: <Homepage />
        },

        {
          path: "/realisation",
          element: <Project />
      },

      {
        path: "/contact",
        element: <Contact />
    },
    ]

  }
])


export default root