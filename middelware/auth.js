import jwt  from "jsonwebtoken";

export const auth=(request,response,next) => {
try{
    const token = request.header("x-auth-token")
    console.log("token",token);
    jwt.verify(token ,process.env.SECRET_KEY);
    next();
}
    catch(err){
response.Status(401).send({message:err.message})
    }
}