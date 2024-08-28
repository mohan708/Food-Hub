import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/Home';
import Sucess from './pages/Sucess';
import Error from './pages/Error';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './assets/index.css'
import { ProtectedRote } from './components/ProtectedRote';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
<Routes>
  <Route  path='/' element={<Home />} />
  <Route  path='/sucess' element={<ProtectedRote element={<Sucess />}/>}  />
  <Route  path='/*' element={<Error />} />
</Routes>

 </BrowserRouter>

 

    </>
  )
}

export default App
