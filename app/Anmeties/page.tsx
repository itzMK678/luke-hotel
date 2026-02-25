import Footer from '@/components/footer'
import React from 'react'
import Amenities from '../amenities/page'
import Header from '@/components/header'

const page = () => {
  return (
     <>
            <Header/>
            <div className="-m-15">
            <Amenities />
            </div> 
            <Footer/>
        </>
  )
}

export default page