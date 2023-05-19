import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdPayments } from 'react-icons/md'

function Banner() {
    return (
        <div className='h-12 w-full bg-yellow-600 flex'>
            <div className='w-2/3 m-auto flex justify-between'>
                <div>
                    <p className='text-4xl font-bold text-white'>Your Everyday, Delivered for free</p>
                    <div></div>
                </div>
                <div>
                    <div className='bg-blue-400 px-6'>
                        <h3>Call to Order</h3>
                        <span>123456789</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Promotion() {
    return (
        <div className='flex justify-between w-2/3 m-auto'>
            <div>
                <p className='w-24'>Sell on jumia</p>
            </div>
            <div className='w-full flex'>
                <span className='mx-2 self-center'>JUMIA</span>
                <div className='mx-2 flex'>
                    <div className='self-center'>
                        <MdPayments />
                    </div>
                    <div className='self-cener py-2 mx-2'>
                        <span >
                            Pay
                        </span>
                    </div>
                </div>
                <div className='mx-2 flex'>
                    <div className='self-center'>
                        <MdPayments />
                    </div>
                    <div className='self-cener py-2 mx-2'>
                        <span >
                            Pay
                        </span>
                    </div>
                </div>
                <div className='mx-2 flex'>
                    <div className='self-center'>
                        <MdPayments />
                    </div>
                    <div className='self-cener py-2 mx-2'>
                        <span >
                            Pay
                        </span>
                    </div>
                </div>
                <div className='mx-2 flex'>
                    <div className='self-center'>
                        <MdPayments />
                    </div>
                    <div className='self-cener py-2 mx-2'>
                        <span >
                            Pay
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


function ActionArea() {
    const navigation = useNavigate()

    const handleCartPage = () => {
        navigation('/cart')
    }
    return (
        <div>
            <div>
                <button onClick={handleCartPage} className='h-6 bg-yellow-700'>
                    Cart
                </button>
            </div>
        </div>
    )
}
export default function HeaderComponent() {
    return (
        <div className='h-12'>
            <Banner />
            <Promotion />
            <ActionArea />
        </div>
    )
}
