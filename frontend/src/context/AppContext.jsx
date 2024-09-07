import { useContext, useState } from "react";
import { createContext } from "react";
import Toast from '../components/Toast'
import { useQuery } from "react-query";
import * as apiClient from '../apiClient'

const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const [toasts,setToast]=useState()
    const {isError}=useQuery('validateToken',apiClient.validateToken)
    const showToast=({toasts})=>{
        setToast(toasts)
        console.log(toasts)
    }

    return(

    <AppContext.Provider value={{showToast,isLoggedIn:!isError}}>
      {toasts && ( <Toast type={toasts.type} onClose={()=>setToast()} message={toasts.message} />)}
        {children}
    </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    const context=useContext(AppContext)
    return context
}