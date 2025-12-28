import { useState } from 'react'
import './App.css'
import Form from './components/searchForm.jsx'
import propertiesData from './assets/data/properties.json'
import ResultList from './components/ResultsList.jsx'

function App() {
  const [properties] = useState(propertiesData);


  return (
    <>
    {/* <div>{JSON.stringify(properties)}</div> */}
    <Form/>
    <ResultList properties={properties} />
    <Form />
    </>
  )
}

export default App
