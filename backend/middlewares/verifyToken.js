import jwt from 'jsonwebtoken'

const verifyToken=(req,res,next)=>{
    const token=req.cookies['auth_token']


if(!token){
    return res.status(401).json({message:"Unauthorized access"})
}

try{
    const decode=jwt.verify(token,process.env.SECRET_KEY)
    req.userId=decode.userId

    next()
}
catch(err){
console.log(err)
}


}

export default verifyToken 