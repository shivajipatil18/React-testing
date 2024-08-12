import { ApolloClient,InMemoryCache } from "@apollo/client";

const client=new ApolloClient({
    uri:"graphQL end point",
    cache:InMemoryCache
})
export default client;