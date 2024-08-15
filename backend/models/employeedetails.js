import mongoose from "mongoose";

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    mobileNo:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }

})

const EmployeeDetail=mongoose.model('EmployeeDetail',employeeSchema)

export default EmployeeDetail