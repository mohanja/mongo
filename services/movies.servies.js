import { client } from "../index.js";

export async function updateMoviesById(id, data) {
    return await client.db("mongo").collection("movies").updateOne({ id: id }, { $set: data });
}
export async function deleteMoviesById(id) {
    return await client.db("mongo").collection("movies").deleteOne({ id: id });
}
export async function creatMovies(data) {
    return await client.db("mongo").collection("movies").insertMany(data);
}
export async function getMovieById(id) {
    return await client.db("mongo").collection("movies").findOne({ id: id });
}
export async function getMovies(request) {
    return await client
        .db("mongo")
        .collection("movies")
        .find(request.query)
        .toArray();
}
