
export const userRegister=async()=>{

   const response= await fetch('http://localhost:5173/api/users/register',{
        method:'POST',
        
    })

    const responseBody=await response.json()

    if(!response.ok){
        throw new Error(responseBody.message)
    }
   
    return responseBody

}

export const userLogin=async()=>{

   const response= await fetch('http://localhost:5173/api/auth/login',{
        method:'POST',
        
    })

    const responseBody=await response.json()

    if(!response.ok){
        throw new Error(responseBody.message)
    }
   
    return responseBody

}