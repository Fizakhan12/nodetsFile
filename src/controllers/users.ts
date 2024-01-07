import {Request,Response} from "express";

const homeDetails=(req:Request,res:Response)=>{
    let ob={
        a:12,b:5
    }
    let data=sumData(ob);
 
    res.json({data:"Data Is This 2",
    sum:data

});
  


} 
interface params{
    a:number,
    b:number
} //here we implement the interface with the help of that we have to passed the object inside the parameter

//like we have to apply some conditions on type then we having a one property sumcheck there 
type sumCheck=(a:params)=>number;
const sumData:sumCheck=(ob:params)=>{
    return ob.a+ob.b;
}
export {
    homeDetails
}