import { movieDB } from "../../data/movieDataBase";

export class GetMoviesUC {
    constructor(private movieDB: movieDB) {}
    public async execute(): Promise<GetMoviesUCOutput> {
    const movies = await this.movieDB.getAllMovies();
    return {
        movies: movies.map(movies => ({
            id: movies.getId(),
            title: movies.getTitle(),
            releaseDate: movies.getReleaseDate(),
            synopsis: movies.getSynopsis(),
            link: movies.getLink(),
            length: movies.getLength(),
            image: movies.getImage()
        }))
      }
    }
}

export interface GetMoviesUCOutput {
    movies: GetMoviesUCOutputMovie[]
}

export interface GetMoviesUCOutputMovie {
    id: string;
    title: string;
    releaseDate: Date;
    synopsis: string;
    link: string;
    length: number;
    image: string;
}