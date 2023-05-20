import React, { createContext, useState } from 'react'
import TopSelling from './topSelling'
import FlashSales from './flashSales'
import NavigationComponent from './navigations'
import BrandsComponents from './brands'

export const GeneralContest = createContext()

export function ContextHandler(props) {
    const [showProps, setShowProps] = useState(false)
    return (
        <GeneralContest.Provider value={{ showProps, setShowProps }}>
            {props.children}
        </GeneralContest.Provider>
    )
}

export default function IndexMainComponent() {
    return (
        <div className='w-full'>
            <div className='w-2/3 m-auto'>
                <ContextHandler>
                    <NavigationComponent />
                </ContextHandler>
                {/* <BrandsComponents />
                <TopSelling />
                <FlashSales /> */}
            </div>
        </div>
    )
}
