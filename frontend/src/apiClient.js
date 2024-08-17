
export const userRegister=async(data)=>{

   const response= await fetch('http://localhost:5173/api/users/register',{
        method:'POST',
        credentials:"include",
        headers:{
            'Content-type':"application/json"
        },
        body:JSON.stringify(data)
    })

    const responseBody=await response.json()

    if(!response.ok){
        throw new Error(responseBody.message)
    }
   
    return responseBody

}

export const userLogin=async(data)=>{

   const response= await fetch('http://localhost:5173/api/auth/login',{
        method:'POST',
        credentials:'include',
        headers:{
            'Content-type':"application/json"
        },
        body:JSON.stringify(data)
    })

    const responseBody=await response.json()

    if(!response.ok){
        throw new Error(responseBody.message)
    }
   
    return responseBody

}