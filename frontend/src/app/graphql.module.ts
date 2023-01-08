import { NgModule } from "@angular/core";
import { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";
import { ApolloLink, InMemoryCache } from "@apollo/client/core";
import { HttpLink } from "apollo-angular/http";
import { environment } from "src/environments/environment";
import { setContext } from "@apollo/client/link/context";

const uri = environment.api;

function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: "application/json, */*"
    }
  }));

  const auth = setContext((operation, context) => {
    const token = sessionStorage.getItem("token");

    if (token === null) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    }
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache
  }
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule { }