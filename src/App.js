import React from 'react'
import List from './pages/list/List'
import Description from './pages/description/Description'
import NoPage from './pages/no-page/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<List />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App