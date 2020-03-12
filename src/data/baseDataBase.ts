import knex from "knex";

export abstract class BaseDB {
    private connection = knex({
      client: "mysql",
      connection: {
        host: "<HOST>",
        port: 0,
        user: "<USER>",
        password: "<PASSWORD>",
        database: "<TABLE>"
      }
    });


}