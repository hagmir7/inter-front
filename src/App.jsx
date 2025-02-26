import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './components/Nav'
import Product from './components/Product'
import Home from './pages/Home'

function App() {

  return (
    <div className='mx-auto'>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
