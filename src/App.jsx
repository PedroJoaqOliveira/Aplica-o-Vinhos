import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Lista from './pages/Lista'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Lista' element={<Lista/>}/>
    </Routes>
    </>
  )
}

export default App
