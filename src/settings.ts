export const GRAPHQL_URL = (process.env.REACT_APP_GRAPHQL_URL || '').trim();

if (!GRAPHQL_URL) throw new Error('Please provide an GRAPHQL_URL');
