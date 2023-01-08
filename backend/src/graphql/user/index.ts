import { readFileSync } from 'fs';
import { resolvers } from "./resolvers";

const queries = readFileSync("./src/graphql/user/queries.graphql", { encoding: "utf-8" });
const mutations = readFileSync("./src/graphql/user/mutations.graphql", { encoding: "utf-8" });
const types = readFileSync("./src/graphql/user/types.graphql", { encoding: "utf-8" });

export const User = { queries, mutations, resolvers, types };