import { filmDB } from "../../data/filmDataBase";

export class GetMoviesUC {
    constructor(private filmDB: filmDB) {}
    public async execute(): Promise<GetMoviesUCOutput> {

    }
}

export interface GetMoviesUCOutput {
    movies: GetMoviesUCOutputMovie[]
}

export interface GetMoviesUCOutputMovie {
    id: string;
    title: string
}