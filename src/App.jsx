import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Index from './pages'
import HomePage from './pages/home'
import CartPages from './pages/cart'
import ShippingPage from './pages/shipping'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/cart' element={<CartPages />} />
                <Route path='/shipping' element={<ShippingPage />} />
            </Routes>
        </BrowserRouter>
    )
}