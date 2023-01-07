import express from "express";
import { auth } from "../middelware/auth.js";
import { getMovies } from "../services/movies.servies.js";

const router=express.Router();

router.get("/",auth, async function (request, response) {
    if (request.query.rating){
      request.query.rating=+request.query.rating
    }
    console.log(request.query)
  const data=request.body;
    const movies = await getMovies(request);
   
    response.send(movies);
   });

   export default router;