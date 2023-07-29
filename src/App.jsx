import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Index from './pages'
import HomePage from './pages/home'
import CartPages from './pages/cart'
import ShippingPage from './pages/shipping'
import { Provider } from 'react-redux'
import store from './reduxTutorial/store'
import Index404 from './pages/404'
import { HOCWrapper, } from './components/HOC'
import { AuthenticationWrapper, Dashboard } from './components/common/hoc'
import React, { useState } from 'react'
import DraggableList from './pages/draggable'
import LoginPage from './pages/login'


export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/users'> */}
                    <Route path='/' element={<Index />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/users/cart' element={<CartPages />} />
                    <Route path='/shipping' element={<ShippingPage />} />
                    <Route path='/secured/dashboard' element={AuthenticationWrapper(Dashboard)} />
                    <Route path='*' element={<Index404 />} />
                    <Route path='/drag' element={<DraggableList />} />
                    <Route path='/login' element={<LoginPage />} />
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </Provider>

    )
}