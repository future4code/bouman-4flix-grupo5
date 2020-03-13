import { MovieDB } from "../../data/movieDataBase";
import { Movie } from "../entities/movie";
import { v4 } from "uuid";

export class CreateMoviesUC {
    constructor(private db: MovieDB) {}
  
    public async execute(input: CreateMovieUCInput): Promise<CreateMovieUCOutput> {
      const id = v4();
  
      const movies = new Movie(
        id,
        input.title,
        input.releaseDate,
        input.synopsis,
        input.link,
        input.length,
        input.image
      );
  
      await this.db.createMovie(movies);
  
      return {
        message: "Film created successfully"
      };
    }
  }
  
  export interface CreateMovieUCInput {
    title: string;
    releaseDate: Date;
    synopsis: string;
    link: string;
    length: number;
    image: string;
  }
  
  export interface CreateMovieUCOutput {
    message: string;
  }


