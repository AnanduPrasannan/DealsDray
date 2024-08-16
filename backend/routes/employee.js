
import express from 'express'
import EmployeeDetail from '../models/employeedetails.js'
import {body, validationResult} from 'express-validator'


const router=express.Router()

router.post('/',[body('name').isString().withMessage("Name field is required"),
                body('email').isEmail().withMessage("Email field is required"),
                body('mobileNo').isNumeric().withMessage("Mobile number required"),
                body('designation').isString().withMessage("Designation field is required"),
                body('gender').isEmpty().withMessage("Select your gender"),
                body('course').isString().withMessage("This field is required"),

],async (req,res)=>{

    const results=validationResult(req)
    if(!results.isEmpty()){
        return res.status(400).json({message:results.array()})
    }


    try{

        let employeeData= await EmployeeDetail.findOne({email:req.body.email})
        if(employeeData){
            res.status(400).json({message:"This email is already taken"})
        }
        employeeData=new EmployeeDetail(req.body)
    
        await employeeData.save()
    
         res.status(201).json({name:employeeData.name})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:"Something weent wrong"})
    }


})


export default router
