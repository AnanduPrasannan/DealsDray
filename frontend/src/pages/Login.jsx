import React from 'react'
import { Link } from 'react-router-dom'
import {register } from 'react-hook-form'

const Login = () => {
cons
  return (
    <div>
         <div className='h-screen flex justify-center items-center'>
        <div className=' p-10 w-1/3 h-auto shadow-2xl ' >
            <h1 className='font-bold text-2xl mt-5 mb-4'>Sign In</h1>
            <form action="" className='mb-8'>
               
                <div className='mb-4'>

                <label htmlFor=""  className='flex flex-col'>
                    Email
                    <input type="email" placeholder='Email' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none' />
                </label>
                </div>
                <div className='mb-4'>

                <label htmlFor="" className='flex flex-col'>
                Password
                    <input type="password" placeholder='Password' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none' />
                </label>
                </div>
               
                <button className='bg-blue-400 p-2 rounded-md text-white hover:opacity-80 shadow-md w-full'>Sign In</button>
            </form>
            <div >
                <Link to='/'className='border border-blue-600 text-blue-600 p-2 hover:bg-blue-600 hover:text-white  hover:opacity-60 flex justify-center rounded-sm' >Dont have an account yet? Register</Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login