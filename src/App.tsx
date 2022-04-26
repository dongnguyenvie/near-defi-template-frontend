import { lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

const LazyHomePage = lazy(() => import('#pages/HomePage'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<LazyHomePage />} />
    </Routes>
  )
}

export default App
