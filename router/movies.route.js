import express from "express";
import { auth } from "../middelware/auth.js";
import { getMovies, getMovieById, creatMovies, deleteMoviesById, updateMoviesById } from "../services/movies.servies.js";

const router=express.Router();

router.get("/", async function (request, response) {
    if (request.query.rating){
      request.query.rating=+request.query.rating
    }
    console.log(request.query)
  const data=request.body;
    const movies = await getMovies(request);
   
    response.send(movies);
   });
  
   router.get("/:id", async function (request, response) {
    const {id}=request.params
  // db.movies.findone{id:'99'}  
   const movie= await getMovieById(id)
  //  const movie=movies.find((mv)=>mv.id===id)
   console.log(movie)
    movie
    ?response.send(movie)
    :response.status(404).send({message:"movies not found"})
  });
  
  router.post("/", async function (request, response) {
    const data=request.body;
    console.log(data)
    const result=await creatMovies(data)
    response.send(result)
    
  });
  
  router.delete("/:id", async function (request, response) {
    const {id}=request.params
  // db.movies.deleteone{id:'99'}  
   const result= await deleteMoviesById(id)
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
   const result= await updateMoviesById(id, data)
  //  const movie=movies.find((mv)=>mv.id===id)
   console.log(result)
   response.send(result)
  //  result
  //   ?response.send({message:"update successfuly"})
  //   :response.status(404).send({message:"movies not found"})
  });

  export default router;


