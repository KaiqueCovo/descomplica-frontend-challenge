export const GRAPHQL_URL = (process.env.REACT_APP_GRAPHQL_URL || '').trim();
export const GRAPHQL_WEBSOCKET=(process.env.REACT_APP_GRAPHQL_WEBSOCKET || '').trim();



if (!GRAPHQL_URL && !GRAPHQL_WEBSOCKET) throw new Error('Please provide an GRAPHQL_URL and GRAPHQL_WEBSOCKET');
