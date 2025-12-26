import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Components/data'
import propertiesData from './assets/data/properties.json'
import ResultList from './Components/ResultList.jsx'

function App() {
  const [properties] = useState(propertiesData);


  return (
    <>
    {/* <div>{JSON.stringify(properties)}</div> */}
    <ResultList properties={properties} />
    <Data />
    </>
  )
}

export default App
