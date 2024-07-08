import React from 'react'
import Landingpage from './suby/components/pages/Landingpage'
import './App.css'
import  {Routes,Route} from 'react-router-dom'
import ProductMenu from './suby/components/ProductMenu'

const App = () => {
  return <>
    <div>
      <Routes>
        <Route path='/' element={<Landingpage></Landingpage>}></Route>
        <Route path="/products/" element={<ProductMenu/>}></Route>
      </Routes>
    </div>
  </>
}

export default App
