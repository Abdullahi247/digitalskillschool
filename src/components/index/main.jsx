import React from 'react'
import TopSelling from './topSelling'
import FlashSales from './flashSales'
import NavigationComponent from './navigations'
import BrandsComponents from './brands'

export default function IndexMainComponent() {
    return (
        <div>
            <NavigationComponent />
            <BrandsComponents />
            <TopSelling />
            <FlashSales />
        </div>
    )
}
