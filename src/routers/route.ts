import express,{Request,Response} from "express";
 const router =express.Router();
 
router.get("/Home",(req:Request,res:Response)=>{
   res.json({
    message:"working Properly"
   })
})
router.get("/About",(req:Request,res:Response)=>{
   res.json({
    message:"About working Properly"
   })
})



export { router }