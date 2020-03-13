import express, { Request, Response } from "express";
import { createMoviesEndpoint } from "./endpoints/movie/createMovie";
import { getFilmsByIdEndpoint } from "./endpoints/movie/getMovieById";

const app = express();
app.use(express.json());

app.post("/create/movie", createMoviesEndpoint);
app.get("/movies/:id", getFilmsByIdEndpoint);

export default app;
