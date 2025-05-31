import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <DaisyNav/> */}
    <Navbar/>
    <PriceOptions/>
    <LineChart />
    <Phones/>
    </>
  )
}

export default App
