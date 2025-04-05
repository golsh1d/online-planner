import React from 'react'
import "./App.css"
import NavBar from './Components/navbar/NavBar'
import routes from './routes'
import { useRoutes } from 'react-router-dom'

export default function App() {
  let router = useRoutes(routes)

  return (
    <>
      <NavBar/>
      {router}
    </>
  )
}