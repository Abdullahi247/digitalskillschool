import React, { useContext, useState } from 'react'
import { allFilters, allFilters2 } from './constants'
import shopper1 from '../../assets/karsten-winegeart-4bC1Ef88OYI-unsplash.jpg'
import shooper2 from '../../assets/lucrezia-carnelos-wQ9VuP_Njr4-unsplash.jpg'
import shopper3 from '../../assets/tamanna-rumee-eD1RNYzzUxc-unsplash.jpg'
import { ContextHandler, GeneralContest } from './main'

function NavItems({ itemName, itemIcon, handleClick, allCategories }) {
    // const [showProps, setShowProps] = useState("")
    const { showProps, setShowProps } = useContext(GeneralContest)

    return (
        <div onMouseEnter={() => setShowProps(true)} onMouseLeave={() => setShowProps(false)} className='flex'>
            <span className='mx-2 self-center'>{itemIcon}</span>
            <button>{itemName}</button>
            {
                showProps &&
                <div className=' fixed bg-red-500 ml-48 w-2/6'>
                    {allCategories.map((each, key) => {
                        return <div key={key}><span>{each}</span></div>
                    })}
                </div>
            }
        </div>
    )
}

export default function NavigationComponent() {

    const { showProps, setShowProps } = useContext(GeneralContest)

    return (
        <div className='w-full h-full relative'>
            <div className='h-2/3 max-h-2/3 w-full flex justify-between'>
                <div className='w-1/6 flex-none overflow-hidden relative'>

                    {
                        allFilters2.map((each, key) => {
                            const { navIcon, navName, handleClick, allCategories } = each
                            return <NavItems key={key} itemName={navName} itemIcon={navIcon} handleClick={handleClick} allCategories={allCategories} />
                        })
                    }

                </div>
                {
                    showProps ?
                        <div className='flex-1'>
                        
                        </div>
                        :
                        <div className='flex-1 overflow-hidden relative'>
                            <img src={shopper1} alt='Shopper 1' height={250} width={'100%'} style={{ width: '100%', maxWidth: '100%', minWidth: '100%', maxHeight: '100%' }} className=' bg-green-500 overflow-y-hidden' />
                        </div>
                }

                <div className=' overflow-hidden relative'>
                    <div>
                        <img src={shooper2} alt='Shopper 2' height={200} width={250} />

                    </div>
                    <div>
                        <img src={shopper3} alt='Shopper 3' height={200} width={250} style={{}} />

                    </div>
                </div>
            </div>
        </div>
    )
}
