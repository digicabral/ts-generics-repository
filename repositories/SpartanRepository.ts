import { Spartan } from "../entities/Spartan";
import { BaseRepository } from "./base/BaseRepository";

export class SpartanRepository extends BaseRepository<Spartan> {
  countOfSpartans(): Promise<number> {
    return this._collection.count({});
  }
}
