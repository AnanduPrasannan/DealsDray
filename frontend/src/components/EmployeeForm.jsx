import React from 'react'
import { useForm } from 'react-hook-form'
const EmployeeForm = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
  return (
    <div>
        <div>
            <form action="">
            <div className='mb-4'>

        <label htmlFor="" className='flex flex-col '>
             Name
            <input type="text"   placeholder='Name' className='border border-gray-400 p-1  rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500  outline-none' {...register('name',{required:"Name field is required"})} />

            {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
            </label>
        </div>
            <div className='mb-4'>

            <label htmlFor=""  className='flex flex-col'>
         Email
            <input type="email" placeholder='Email'  className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none'{...register('email',{required:"Email field is required"})} />
            {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
        </label>
        </div>
            <div className='mb-4'>

            <label htmlFor=""  className='flex flex-col'>
         MobileNo
            <input type="text" placeholder='MobileNo'  className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none'{...register('mobileNo',{required:"Mobile Number is required"})} />
            {errors.email && (<span className='text-red-500'>{errors.mobileNo.message}</span>)}
        </label>
        </div>

        <div>
            <div>
               {['HR','Manager','Sales'].map((des)=>(
                    <select>
                        <option value={des}>{des}</option>
                    </select>
               ))} 
            </div>
        </div>
             
        <div>
           <div>
            {['MCA','BCA','Bsc'].map((course)=>(
                <label>
                    Enter Your Course
                <input type='checkbox' value={course}/>
                </label>
            ))}
           </div>
        </div>
            <button type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EmployeeForm