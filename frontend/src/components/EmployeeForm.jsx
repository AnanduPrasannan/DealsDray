import React from 'react'
import { useForm } from 'react-hook-form'
const EmployeeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const submit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <div>
            <div className='container mx-auto'>
                <form action="" onSubmit={submit}>
                    <div className='mb-4'>

                        <label htmlFor="" className='flex flex-col '>
                            Name
                            <input type="text" placeholder='Name' className='border border-gray-400 p-1  rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500  outline-none' {...register('name', { required: "Name field is required" })} />

                            {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
                        </label>
                    </div>
                    <div className='mb-4'>

                        <label htmlFor="" className='flex flex-col'>
                            Email
                            <input type="email" placeholder='Email' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none'{...register('email', { required: "Email field is required" })} />
                            {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
                        </label>
                    </div>
                    <div className='mb-4'>

                        <label htmlFor="" className='flex flex-col'>
                            MobileNo
                            <input type="text" placeholder='Mobile' className='border border-gray-400 p-1 rounded-sm placeholder:text-slate-200 focus:ring-2 ring-blue-500 outline-none'{...register('mobileNo', { required: "MobileNO field is required" })} />
                            {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
                        </label>

                    </div>

                    <div className='mb-4'>
                        {['HR', 'manager', 'sales'].map((des) => (
                            <select  {...register('designation', { required: true })}>
                                <option value='HR'>{des}</option>

                            </select>
                        ))}
                    </div>

                    <div className='mb-4' >
                        <label htmlFor="">
                            Male
                            <input type="radio" {...register('gender', { required: true })} />
                        </label>
                        <label htmlFor="">
                            Female
                            <input type="radio" />
                        </label>

                    </div>

                    <div className='mb-4'>
                        {['MCA', 'BCA', 'Bsc'].map((course) => (
                            <select {...register('course', { required: true })}>
                                <option value={course}>{course}</option>
                            </select>
                        ))}

                    </div>
                    <button type='submit' className='bg-blue-600 text-white p-2 font-medium rounded-md'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EmployeeForm