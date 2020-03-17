import {BaseDB} from "./baseDataBase"
import { Episodes } from "../business/entities/episodes";

export class SerieDB extends BaseDB {
    private serieTableName = "episode";
}