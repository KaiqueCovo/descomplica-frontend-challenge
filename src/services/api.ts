import { ApolloClient, InMemoryCache} from '@apollo/client';
import { GRAPHQL_URL } from 'settings'

export const api = new ApolloClient({
  cache: new InMemoryCache(),
  uri: GRAPHQL_URL
});
