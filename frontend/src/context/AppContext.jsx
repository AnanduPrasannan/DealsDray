import { useContext } from "react";
import { createContext } from "react";
import Toast from "../components/Toast";

const AppContext=createContext()

export const AppContextProvider=({children})=>{
    const showToast=({toast})=>{
        console.log(toast)
    }

    return(

    <AppContext.Provider value={{showToast}}>
        {children}
        <Toast type={type} onClose={onClose }/>
    </AppContext.Provider>
    )
}

export const useAppContext=()=>{
    const context=useContext(AppContext)
    return context
}