import gql from "graphql-tag";
import { User } from "./user";

const typeDefs = gql`
  ${User.types}
  
  ${User.queries}
  
  ${User.mutations}
`;

export default typeDefs;