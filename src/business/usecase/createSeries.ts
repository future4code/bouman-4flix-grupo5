import { Series } from "../entities/series";
import { v4 } from "uuid";
import { SerieDB } from "../../data/serieDataBase";

export class CreateSeriesUC {
    constructor(private db: SerieDB) { }

    public async execute(input: CreateSeriesUCInput): Promise<CreateSeriesUCOutput> {
        const id = v4();

        const series = new Series(
            id,
            input.title,
            input.releaseDate,
            input.image,
            input.synopsis
        );

        await this.db.createSerie(series);

        return {
            message: "Series created successfully"
        }
    }
}

export interface CreateSeriesUCInput {
    title: string,
    releaseDate: Date,
    image: string,
    synopsis: string
}

export interface CreateSeriesUCOutput {
    message: string;
}