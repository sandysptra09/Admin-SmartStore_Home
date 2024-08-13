import './App.css'
import RoutesPath from './routes/Index'

// import primereact component
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <PrimeReactProvider>
      <ToastContainer />
      <RoutesPath />
    </PrimeReactProvider>
  )
}

export default App
