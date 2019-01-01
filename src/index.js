import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import App from './App'
import GlobalStyle from './theme/GlobalStyle'
import Theme from './theme/Theme'
import { ThemeProvider } from 'styled-components'

const GITHUB_BASE_URL = 'https://api.github.com/graphql'

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('GRAPHQLERROR', graphQLErrors)
  }

  if (networkError) {
    console.log('NETWORKERRORS', networkError)
  }
})

const link = ApolloLink.from([errorLink, httpLink])

const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </ApolloProvider>,
  document.getElementById('root')
)
