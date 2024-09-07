import React from 'react'
import { useAppContext } from '../context/AppContext'
import * as apiClient from '../apiClient'
import {useMutation, useQueryClient} from 'react-query'


const SignoutButton = () => {
  const {showToast}=useAppContext()
  const queryClient=useQueryClient()
  const mutation=useMutation(apiClient.userLogout,{
    onSuccess:async ()=>{
      showToast({message:"LoggedOut Successfully",type:'success'})
      await queryClient.invalidateQueries('validateToken')
    
    },
    onError:()=>{
      showToast({message:"Error logging Out",type:'error'})
    }
  })

  const handleClick=()=>{
    mutation.mutate()
  }

  return (
    <div>
        <button className='text-lg  font-medium p-2 rounded-md hover:bg-blue-600 hover:text-white' onClick={handleClick}>
            Logout
        </button>
    </div>
  )
}

export default SignoutButton