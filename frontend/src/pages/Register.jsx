import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Register = () => {
    const {register}=useForm()
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className=' p-10 w-1/3 h-auto shadow-2xl ' >
            <h1 className='font-bold text-2xl mt-5 mb-4'>Sign Up</h1>
            <form action="" className='mb-8'>
                <div className='mb-4'>

                <label htmlFor="" className='flex flex-col '>
                    Name
                    <input type="text"   placeholder='Name' className='border border-gray-400 p-1  rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500  outline-none' {...register('name')} />
                </label>
                </div>
                <div className='mb-4'>

                <label htmlFor=""  className='flex flex-col'>
                    Email
                    <input type="email" placeholder='Email' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none'{...register('email')} />
                </label>
                </div>
                <div className='mb-4'>

                <label htmlFor="" className='flex flex-col'>
                Password
                    <input type="password" placeholder='Password' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none' {...register('password',{min:6,max:20})} />
                </label>
                </div>
                <div className='mb-4'>

                <label htmlFor="" className='flex flex-col'>
                Confirm Password
                    <input type="password" placeholder='Confirm Password' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none' {...register('confirm Password')} />
                </label>
                </div>
                <button className='bg-blue-400 p-2 rounded-md text-white hover:opacity-80 shadow-md w-full'>Sign Up</button>
            </form>
            <div >
               <Link to='/login' className='border border-blue-600 text-blue-600 p-2 hover:bg-blue-600 hover:text-white  hover:opacity-60 flex justify-center rounded-sm'>Already have an account?Sign In</Link> 
            </div>
        </div>
    </div>
  )
}

export default Register