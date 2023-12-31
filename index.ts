import { MongoClient } from "mongodb";

import { Hero } from "./entities/Hero";
import { Spartan } from "./entities/Spartan";
import { HeroRepository } from "./repositories/HeroRepository";
import { SpartanRepository } from "./repositories/SpartanRepository";

(async () => {
  const connection = await MongoClient.connect("mongodb://localhost:27017");
  const db = connection.db("warriors");

  const spartan = new Spartan("Leonidas", 1020);

  const repository = new SpartanRepository(db, "spartans");

  const result = await repository.create(spartan);
  console.log(`spartan inserted with ${result ? "success" : "fail"}`);

  const count = await repository.countOfSpartans();
  console.log(`the count of spartans is ${count}`);

  const hero = new Hero("Spider Man", 200);
  const repositoryHero = new HeroRepository(db, "heroes");
  const resultHero = await repositoryHero.create(hero);
  console.log(`hero inserted with ${resultHero ? "success" : "fail"}`);
})();
