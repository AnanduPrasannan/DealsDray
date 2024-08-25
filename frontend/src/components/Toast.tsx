import React, { useEffect } from 'react'

const Toast = ({type,onClose}) => {
   

    const  styles=
    type === "success"?"absolute top-10 right-10 w-20 text-white bg-green-500 font-medium p-2 rounded-md  z-50":"absolute top-10 right-10 w-20 text-white bg-red-500 font-medium p-2 rounded-md  z-50"

useEffect(()=>{

    const timer=setTimeout(()=>{
        onClose()
    },5000)
    return ()=>{
        clearTimeout(timer)
    }
},[onClose])
  return (
    <div>
        <div>

        </div>
    </div>
  )
}

export default Toast