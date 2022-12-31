import express from "express";
import{client} from "../index.js"

const router=express.Router();

router.get("/", async function (request, response) {
    if (request.query.rating){
      request.query.rating=+request.query.rating
    }
    console.log(request.query)
  const data=request.body;
    const movies = await client
    .db("mongo")
    .collection("movies")
    .find(request.query)
    .toArray();
   
    response.send(movies);
   });
  
   router.get("/:id", async function (request, response) {
    const {id}=request.params
  // db.movies.findone{id:'99'}  
   const movie= await client.db("mongo").collection("movies").findOne({id:id})
  //  const movie=movies.find((mv)=>mv.id===id)
   console.log(movie)
    movie
    ?response.send(movie)
    :response.status(404).send({message:"movies not found"})
  });
  
  router.post("/" ,async function (request, response) {
    const data=request.body;
    console.log(data)
    const result=await client.db("mongo").collection("movies").insertMany(data)
    response.send(result)
    
  });
  
  router.delete("/:id", async function (request, response) {
    const {id}=request.params
  // db.movies.deleteone{id:'99'}  
   const result= await client.db("mongo").collection("movies").deleteOne({id:id})
  //  const movie=movies.find((mv)=>mv.id===id)
   console.log(result)
   result
    ?response.send({message:"delete successfuly"})
    :response.status(404).send({message:"movies not found"})
  });
  
  router.put("/:id", async function (request, response) {
    const {id}=request.params
    const data=request.body;
  // db.movies.updateeone({id:'99'},{$set:{rating: 9}}) 
   const result= await client.db("mongo").collection("movies").updateOne({id:id},{$set:data})
  //  const movie=movies.find((mv)=>mv.id===id)
   console.log(result)
   response.send(result)
  //  result
  //   ?response.send({message:"update successfuly"})
  //   :response.status(404).send({message:"movies not found"})
  });

  export default router;