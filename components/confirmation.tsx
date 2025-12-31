import React from 'react'

const Confirmation = () => {
  return (
    <div className='bg-white max-w-5xl mx-auto px-4 py-10'>
  
    <div className='font-extrabold text-15px text-blue-950 '>Confirm Your Booking</div>
    <form action="">
        <input type="text"  placeholder='Name'/>
          <input type="email"  placeholder='Email' />
            <input type="text"   placeholder='Phone'/>
            <input type="text"   placeholder='Class' readOnly/>
    </form>
    <button className='bg-green-400 text-white p-2 m-2 w-full rounded-[8px] hover:bg-green-600 cursor-pointer'>Confirm Booking</button>
      </div>
  )
}

export default Confirmation 