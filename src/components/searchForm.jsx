import {useState} from 'react'
import './Data.css'

function Form() {

  const[type,setType] =useState("")

  return (
    <>
      <form action="">
        <h1>Search properties</h1>
        <select ID="type" value={type} onChange={(e)=> setType(e.target.value)} className='form-control'>
          <option value="">Any</option>
          <option value="">House</option>
          <option value="">Flat</option>
        </select>
        <div className=''></div>
      </form>
    </>
  )
}

export default Form