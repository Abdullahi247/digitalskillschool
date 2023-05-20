import React from 'react'
import HeaderComponent from '../components/common/header'
import FooterComponent from '../components/common/footer'
import IndexMainComponent from '../components/index/main'

export default function Index() {
  return (
    <>
      <div className=' w-full h-screen bg-gray-200'>
        <HeaderComponent />
        <IndexMainComponent />
        {/* <FooterComponent /> */}
      </div>
    </>
  )
}
