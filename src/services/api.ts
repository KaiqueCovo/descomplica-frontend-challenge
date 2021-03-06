import { ApolloClient, InMemoryCache, split, HttpLink} from '@apollo/client';
import { GRAPHQL_URL, GRAPHQL_WEBSOCKET } from 'settings'
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = new HttpLink({
  uri:  GRAPHQL_URL
});

const wsLink = new WebSocketLink({
  uri: GRAPHQL_WEBSOCKET,
  options: {
    reconnect: true
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const api = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
});
