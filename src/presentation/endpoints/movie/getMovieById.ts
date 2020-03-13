import { Request, Response } from "express";
import { movieDB } from "../../../data/movieDataBase";
import { GetMoviesByIdUC } from "../../../business/usecase/getMoviesById";

export const getFilmsByIdEndpoint = async (req: Request, res: Response) => {
    try {
        const getFimlsByIdUC = new GetMoviesByIdUC(new movieDB());
        const result = await getFimlsByIdUC.execute({
            id: req.params.id
        });

        res.status(200).send(result)
    } catch (err) {
             
    }
}