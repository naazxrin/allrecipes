import './App.css'
import Home from './components/Home'
import View from './components/View'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/:id/view'element={<View/>} />
    </Routes>
    </>
  )
}

export default App