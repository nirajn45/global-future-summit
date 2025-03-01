import React from 'react';

import { Route , Routes } from 'react-router-dom';                          

import Layout from './Pages/gfs';

import Homepage from './Pages/ideate'




const Routers = () => {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Layout/>}/>
      <Route path='/ideate' element={<Homepage/>}/>
      
    
  

    </Routes>
  
    </>
  )
}

export default Routers
