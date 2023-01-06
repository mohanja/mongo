import express from "express";
import bcrypt from "bcrypt" 
import jwt from "jsonwebtoken";
import { createUser, generateHashedPassword,getUserByName } from "../services/user.servies.js";

const router=express.Router();


  
  router.post("/signup" ,async function (request, response) {

    const {username,password}=request.body;
    
    // db.movies.insertmany(data)

    const userFromDB= await getUserByName(username);
    console.log(userFromDB)

if(userFromDB){
  response.status(400).send({message:"username already exists"})
}else if(username <8){
  response.status(400).send({message:"password must by at least 8 charaters"})
}else{
    const hashedPassword= await  generateHashedPassword(password)
    const result=await createUser({
      username:username,
      password:hashedPassword
    })
    response.send(result)

}  
  });
 

  router.post("/login" ,async function (request, response) {

    const {username,password }=request.body;
    
    // db.movies.insertmany(data)

    const userFromDB= await getUserByName(username);
    console.log(userFromDB)

if(!userFromDB){
  response.status(401).send({message:" invalid credentials"})
}else {
  const storedDBPassword=userFromDB.password
  const isPasswordCheck=await bcrypt.compare(password,storedDBPassword)
  console.log(isPasswordCheck)

    
   if(isPasswordCheck){
   const token=jwt.sign({id:userFromDB._id},process.env.SECRET_KEY)
    response.send({message:"successfuly login",token: token});
   } else{
    response.status(401).send({message:"invalid credentials"});
   }
   } 
  });
 

  export default router;