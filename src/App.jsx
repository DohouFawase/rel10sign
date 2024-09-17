
import { HelmetProvider } from "react-helmet-async"
import Root from "./routes/root"

function App() {
  
const helmetContext = {};

  return (
    <>
    <HelmetProvider context={helmetContext}>
           <Root/>

    </HelmetProvider>
    </>
  )
}

export default App
