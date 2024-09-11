import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Weather from './Component/Weather'

const App = () => {

  return (
    <>
      <BrowserRouter>
      <h1><Link to='/weather'>Weather website</Link></h1>
        <Routes>
          <Route path='/weather' element={<Weather/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App













//2957506044647b076e930c09708b9d3f