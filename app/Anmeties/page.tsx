import Footer from '@/components/footer'
import React from 'react'
import Amenities from '../amenities/page'
import Header from '@/components/header'

const page = () => {
  return (
     <>
            <Header/>
            <Amenities />
            <Footer/>
        </>
  )
}

export default page