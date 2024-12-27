import React from 'react'
import useStore from './store'
import { useGetTodosQuery } from './service/api'
import { Home, Navbar } from './components'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const {count, inc, random} = useStore()
  // const {data, isLoading, error} = useGetTodosQuery()
  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App