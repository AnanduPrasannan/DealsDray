import { useContext, useState } from "react";
import { createContext } from "react";
import Toast from '../components/Toast'

const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const [toasts,setToast]=useState()
    const showToast=({toasts})=>{
        setToast(toasts)
        console.log(toasts)
    }

    return(

    <AppContext.Provider value={{showToast}}>
      {toasts && ( <Toast type={toasts.type} onClose={()=>setToast()} message={toasts.message} />)}
        {children}
    </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    const context=useContext(AppContext)
    return context
}