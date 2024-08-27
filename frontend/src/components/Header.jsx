import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex justify-between items-center border border-yellow-700 mt-2 '>
            <div className='text-lg  font-medium p-2 rounded-md hover:bg-black hover:text-white'>Home</div>
            <div className='text-lg  font-medium p-2 rounded-md hover:bg-black hover:text-white'>Create Employee</div>
            <div className='text-lg  font-medium p-2 rounded-md hover:bg-black hover:text-white'>Employee List</div>
           <div className='flex items-center gap-4'>
            <div className='text-lg  font-medium p-2 rounded-md hover:bg-black hover:text-white'>
              Name
            </div>
            <div className='text-lg  font-medium p-2 rounded-md hover:bg-blue-600 hover:text-white'>
              logout
            </div>
           </div>
        </div>
    </div>
  )
}

export default Header