import { Route, Routes } from 'react-router'
import './App.css'
import Nav from './components/Nav'
import Product from './components/Product'
import Home from './pages/Home'
import Products from './pages/products'
import ShowProduct from './pages/ShowProduct'
import VirtualViewer from './pages/VirtualViewer'

function App() {

  return (
    <div className='mx-auto'>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path='products/:slug' element={<ShowProduct />} />
        <Route path='viewer' element={<VirtualViewer />} />
      </Routes>
    </div>
  )
}

export default App
