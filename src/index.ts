import express,{Request,Response} from "express";
import { router } from "./routers/route";
import { homeDetails } from "./controllers/users";
const app =express();
const PORT=4000; 

// i am using middleware here
app.use("/",router)
app.get("/test",homeDetails)

app.listen(PORT,():void=>{ //if it is not return anything we used void
    console.log(`server is listening on port ${PORT}`);
})
