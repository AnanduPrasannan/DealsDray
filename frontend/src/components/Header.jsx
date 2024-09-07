import React from 'react'
import SignoutButton from './SignoutButton'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const {isLoggedIn}=useAppContext()
  return (
    <div>
      {isLoggedIn ?(
        <div className='flex justify-between items-center border border-yellow-700 mt-2 '>
        <div className='text-lg  font-medium p-2 rounded-md hover:bg-black hover:text-white'>Home</div>
        <div className='text-lg  font-medium p-2 rounded-md hover:bg-black hover:text-white'>Create Employee</div>
        <div className='text-lg  font-medium p-2 rounded-md hover:bg-black hover:text-white'>Employee List</div>
       <div className='flex items-center gap-4'>
        <div className='text-lg  font-medium p-2 rounded-md hover:bg-black hover:text-white'>
          Name
        </div>
       <SignoutButton/>
       </div>
    </div>

      ):(

        <div>
           <Link to='/login' className='bg-blue-400 p-2 rounded-md text-white hover:opacity-80 shadow-md w-full'>Sign In</Link>

      </div>
      )    
      
      }
        
    </div>
  )
}

export default Header