import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdPayments, MdStars, MdOutlineSearch } from 'react-icons/md'
import { FaRegUser, FaQuestionCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { BsCart4 } from 'react-icons/bs'
import { allFilters } from '../index/constants'

function Banner() {
    return (
        <div style={{ backgroundColor: '#04021A' }} className='h-12 w-full  flex'>
            <div className='w-2/3 bg-yellow-600 m-auto'>
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
        </div>
    )
}

function Promotion() {
    return (
        <div className='bg-gray-200 w-full'>
            <div className='flex justify-between w-2/3 m-auto'>
                <div className='self-center flex'>
                    <MdStars className='self-center text-yellow-700 mr-2' />
                    <a className='text-yellow-700 text-sm' href='https://sell.com'>Sell on jumia</a>
                </div>
                <div className=' flex'>
                    <span className='mx-2 self-center font-thin text-sm'>JUMIA</span>
                    <div className='mx-2 flex text-gray-400 hover:text-gray-700'>
                        <div className='self-center'>
                            <MdPayments />
                        </div>
                        <div className='self-cener py-2 mx-2'>
                            <span >
                                Pay
                            </span>
                        </div>
                    </div>
                    <div className='mx-2 flex text-gray-400 hover:text-gray-700'>
                        <div className='self-center'>
                            <MdPayments />
                        </div>
                        <div className='self-cener py-2 mx-2'>
                            <span >
                                Food
                            </span>
                        </div>
                    </div>
                    <div className='mx-2 flex text-gray-400 hover:text-gray-700'>
                        <div className='self-center'>
                            <MdPayments />
                        </div>
                        <div className='self-cener py-2 mx-2'>
                            <span >
                                Party
                            </span>
                        </div>
                    </div>
                    <div className='mx-2 flex text-gray-400 hover:text-gray-700'>
                        <div className='self-center'>
                            <MdPayments />
                        </div>
                        <div className='self-cener py-2 mx-2'>
                            <span >
                                Logistics
                            </span>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

function SuggestedPages({ title }) {
    return (
        <li>{title}</li>
    )
}

function ActionArea() {
    const navigation = useNavigate()

    const handleCartPage = () => {
        navigation('/cart')
    }

    const [searchBoxItems, setSearchBoxItems] = useState([])
    const [search, setSearch] = useState("")
    const [actionStep, setActionStep] = useState("")

    const handleSearch = (event) => {
        const { target: { value } } = event
        setSearch(value)
    }

    const handleSearchBar = () => {
        const regMatch = new RegExp(search, 'i')
        const filterPages = allFilters.filter((each) => regMatch.test(each))
        console.log(filterPages)
        filterPages.length === 0 ? setSearchBoxItems(["Search List Empty"]) : setSearchBoxItems(filterPages)
    }

    return (
        <div className='w-full bg-white py-6'>
            <div className='flex w-2/3 m-auto'>
                <div className='w-1/6'>
                    <p>Jumia</p>
                </div>
                <div className='flex relative'>
                    <div className='flex border-2 border-gray-300 rounded'>
                        <MdOutlineSearch className='self-center' />
                        <input value={search} onChange={(event) => handleSearch(event)} className='w-3/5 mx-2' />
                    </div>
                    <button onClick={handleSearchBar} className='bg-yellow-700 px-4 py-2 rounded mx-2'>
                        SEARCH
                    </button>
                    <div className='absolute hidden my-12 rounded p-4 bg-gray-300 w-2/5'>
                        <ul>
                            {
                                searchBoxItems.map((each, key) => {
                                    return <SuggestedPages key={key} title={each} />
                                })
                            }

                        </ul>
                    </div>
                  
                    <div className='flex mx-2'>
                        <FaRegUser className='self-center' />
                        <button onClick={() => setActionStep("STEP1")} className='mx-2 self-center'>
                            Account
                        </button>
                        <IoIosArrowDown className='self-center' />
                    </div>
                    {
                        actionStep === "STEP1" ?
                        <div className='absolute my-12 mx-64 rounded p-4 bg-gray-300 w-2/5'>
                            <button>LOGIN</button>
                            <div>
                                <button>My Accounts</button>
                                <button>Orders</button>
                                <button>Saved Items</button>
                            </div>
                        </div>
                        :
                        null
                    }
                    <div className='flex mx-2'>
                        <FaQuestionCircle className='self-center' />
                        <button onClick={() => setActionStep("STEP2")} className='mx-2 self-center'>
                            Help
                        </button>
                        <IoIosArrowDown className='self-center' />
                    </div>
                    {
                        actionStep === "STEP2" ?
                        <div className='absolute my-12 mx-96 rounded p-4 bg-gray-300 w-2/5'>
                           <div>
                                <button>Help Center</button>
                                <button>Place and Track Order</button>
                                <button>Help Center</button>
                                <button>Place and Track Order</button>
                                <button>Help Center</button>
                                <button>Place and Track Order</button>
                            </div>
                        </div>
                        :
                        null
                    }
                    <div className='flex mx-2'>

                        <BsCart4 className='self-center' />
                        <button className='mx-2 self-center' onClick={handleCartPage} >
                            Cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default function HeaderComponent() {
    return (
        <div className='h-auto'>
            <Banner />
            <Promotion />
            <ActionArea />
        </div>
    )
}
