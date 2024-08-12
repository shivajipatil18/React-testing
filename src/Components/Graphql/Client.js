import { ApolloClient,InMemoryCache } from "@apollo/client";

export const Client=new ApolloClient({
    uri: 'https://your-graphql-api-endpoint', // Replace with your GraphQL API endpoint
cache:new InMemoryCache(),
})