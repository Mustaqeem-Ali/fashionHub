import React from 'react'
import './Owner.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import {Routes,Route} from "react-router-dom" 
import AddProduct from '../../components/AddProduct/AddProduct'
import Listproduct from '../../components/ListProduct/Listproduct'
const Owner = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/listproduct" element={<Listproduct/>} />
        </Routes>
    </div>
  )
}

export default Owner