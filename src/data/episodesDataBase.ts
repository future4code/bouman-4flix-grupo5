import {BaseDB} from "./baseDataBase"
import { Episodes } from "../business/entities/episodes";

export class serieDB extends BaseDB {
    private serieTableName = "episode";
}