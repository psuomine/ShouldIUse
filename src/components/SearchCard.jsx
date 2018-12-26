import React, { Component } from 'react'
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo'
import styled from 'styled-components'
import { H3 } from 'components/styles/Heading'
import SearchCardForm from 'components/SearchCardForm'
import { getRepository } from 'graphql/queries'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 48px;
  border-radius: 20px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16), 0 5px 4px 0px rgba(0, 0, 0, 0.1);
`

const CardContent = styled.div`
  padding: 48px 48px 0 48px;
`

class SearchCard extends Component {
  state = {
    repository: null,
    isLoading: false,
  }

  handleSearchSuccess = ({ repository }) => this.setState({ repository, isLoading: false })

  handleStartSearch = () => this.setState({ repository: null, isLoading: true })

  render() {
    return (
      <ApolloConsumer>
        {client => (
          <Card>
            <CardContent>
              <H3>Search the npm package</H3>
            </CardContent>
            <SearchCardForm
              handleSearch={async (name, owner) => {
                const { data } = await client.query({
                  query: gql(getRepository),
                  variables: { name, owner },
                })
                this.handleSearchSuccess(data)
              }}
            />
          </Card>
        )}
      </ApolloConsumer>
    )
  }
}

export default SearchCard
