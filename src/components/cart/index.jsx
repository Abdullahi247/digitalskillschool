import React, { useState } from 'react'

export default function CartIndexComponent() {
    const [credentials, setCredentials] = useState({
        firstname: ""
    })
    const handleChange = () => {

    }
    return (
        <div className='h-screen w-scren bg-gray-200 p-6'>
            <div>
                <div>
                    <h3 className='text-3xl font-bold text-gray-600'>Shopping Cart</h3>
                    <h3 className='font-bold text-gray-600'>Homepage / Clothing Categories / My Shopping Cart</h3>
                    <br />
                    <br />
                    <br />
                    <div className='w-full'>
                    </div>
                    <div className='w-3/6'>
                        <div></div>
                        <div className='bg-white flex justify-between px-8 py-3 rounded drop-shadow-2xl'>
                            <div className='self-center'>
                                <span>Login </span><br />
                                <span className='font-bold'>Digital Skill School</span>
                            </div>
                            <div className='self-center'>
                                <button className='font-bold'>CHANGE</button>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div>
                            <div>
                                <h3 className='font-bold text-2xl text-gray-700'>Shipping Address</h3>
                            </div>
                            <div className='flex justify-around'>
                                <div>
                                    <label>Firstname</label><br />
                                    <input value={credentials.firstname} className='py-1 px-2' type='text' />
                                </div>
                                <div>
                                    <label>Lastname</label><br />
                                    <input value={credentials.firstname} className='py-1 px-2' type='text' />
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/4'>

                    </div>
                </div>
            </div>
        </div>
    )
}
