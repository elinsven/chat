import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./graphql";
import { GraphQLError } from "graphql";
import { Context, decodeAuthHeader } from "./utils/auth";

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const MONGODB: string = process.env.DATABASE_URL;

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  introspection: true
});

mongoose.connect(MONGODB).then(async () => {
  await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      if (req && req.headers.authorization) {
        const token = decodeAuthHeader(req.headers.authorization);
        if (!token) {
          throw new GraphQLError("User is not authenticated", {
            extensions: {
              code: "UNAUTHENTICATED",
              http: { status: 401 },
            },
          })
        }
        return { userId: token.userId };
      }
    },
    listen: { port: 4000 },
  }).then((res) => {
    console.log(`🚀  Server ready at: ${res.url}`);
  });
})