import { Options } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import path from "path";

console.log("dirname: ", __dirname);

const mikroConfig: Options = {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post],
  dbName: "bingofy",
  // user: "ozckarr",
  password: "vatten99",
  type: "postgresql",
  debug: !__prod__,
};
export default mikroConfig;
