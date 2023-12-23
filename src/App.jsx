import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Header from './components/header/Header'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Shop from './pages/shop/Shop'
import Blog from './pages/blogs/Blog'
import MobileMenu from './components/mobileMenu/MobileMenu'
import Footer from './components/footer/Footer'
import Product from './pages/product/Product'
import ShoppingCart from './pages/cart/CartPages/ShoppingCart'
import OrderComplete from './pages/cart/CartPages/OrderComplete'
import CheckoutDetails from './pages/cart/CartPages/CheckoutDetails'
import Account from './pages/profile/Account'
import Address from './pages/profile/Address'
import OrdersPage from './pages/profile/OrdersPage'
import Wishlist from './pages/profile/Wishlist'

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

  return (

    <div className="app">
      <BrowserRouter>
        {isMobile ? <MobileMenu /> : <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create/account' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='/shoppingCart' element={<ShoppingCart />} />
          <Route path='/orderComplete' element={<OrderComplete />} />
          <Route path='/checkoutDetails' element={<CheckoutDetails />} />
          <Route path='/account' element={<Account />} />
          <Route path='/address' element={<Address />} />
          <Route path='/orderPage' element={<OrdersPage />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
