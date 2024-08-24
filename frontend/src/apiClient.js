
export const userRegister=async (data)=>{

   const response= await fetch('http://localhost:3000/api/users/register',{
        method:'POST',
        credentials:"include",
        headers:{
            'Content-Type':"application/json"
        },
        body:JSON.stringify(data)
    })

    
    if(!response.ok){
        throw new Error(response.message)                 //If you write "error fetching" , then it will be displayed in mutation function
    }
    return response.json()

}

export const userLogin=async(data)=>{

   const response= await fetch('http://localhost:3000/api/auth/login',{
        method:'POST',
        credentials:'include',
        headers:{
            'Content-type':"application/json"
        },
        body:data
    })


    if(!response.ok){
        throw new Error("Error fetching user at login")
    }
   
    return response.json()

}