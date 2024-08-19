
export const userRegister=async (data)=>{

   const response= await fetch('http://localhost:3000/api/users/register',{
        method:'POST',
        credentials:"include",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    })

    const responseBody=await response.json()

    if(!response.ok){
        throw new Error(responseBody.message)
    }
   
   

}

export const userLogin=async(data)=>{

   const response= await fetch('http://localhost:3000/api/auth/login',{
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