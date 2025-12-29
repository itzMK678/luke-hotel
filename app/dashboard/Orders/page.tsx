import React from 'react'

const page = () => {
  return (
    <div>
         <h3 className='font-extrabold text-center text-[25px]'>Orders </h3>

        <div className='w-full m-3 bg-blue-200 rounded-2xl p-5'>
          <p className='font-bold text-blue-400'>Name </p>
         <p className='text-[12px] text-blue-400'>Email</p> 
         <div className='flex justify-evenly'><p className='font-extrabold text-blue-700'>Class </p>
         <p className='font-extrabold text-blue-700'>Date  </p>
         </div>
         <button className='bg-green-400 text-white p-2 rounded-[8px] m-2  w-full hover:bg-green-600 cursor-pointer'>Confirm Order</button>
        </div>

   
    </div>
  )
}

export default page