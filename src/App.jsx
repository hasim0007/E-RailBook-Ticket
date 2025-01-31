import React, { useEffect, useState } from 'react'
import { SignUp } from './components/SignUp'
import { Header } from './components/Header'
import './App.css'
import { Login } from './components/Login'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { BookTicket } from './components/BookTicket'
import { createContext } from 'react';
import { GetFair } from './components/GetFair'
import { ShowTicket } from './components/ShowTicket'
export const stationContext = createContext();

export const App = () => {
  const [FromData, setFromData] = useState('');
  const [ToData, setToData] = useState('');
  const [getDate, setgetDate] = useState('');
  const [trainNo, settrainNo] = useState();

  return (
    <> 
      <stationContext.Provider value={{ FromData , ToData , getDate , trainNo , setFromData , setToData , setgetDate , settrainNo }}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/bookticket' element={<BookTicket/>}/>
            <Route path='/getfair' element={<GetFair/>}/>
            <Route path='/showticket' element={<ShowTicket/>}/>
          </Routes>
        </BrowserRouter>
      </stationContext.Provider> 
    </>
  )
}


  

