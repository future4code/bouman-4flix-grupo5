import { Request, Response } from "express";
import { CreateSeriesUC } from "../../../business/usecase/createSeries";
import { serieDB } from "../../../data/serieDataBase";

export const createSeriesEndpoint = async (req: Request, res: Response) => {
    try {
        const createSeriesUC = new CreateSeriesUC(new serieDB());
        const result = await createSeriesUC.execute({
            title: req.body.title,
            releaseDate: req.body.releaseDate,
            image: req.body.image,
            synopsis: req.body.synopsis
        })

        res.status(200).send(result);
    } catch (err) {
      
    }
}