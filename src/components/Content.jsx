import React, { Component } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo'
import PageTitle from 'components/PageTitle'
import SearchCard from 'components/SearchCard'
import Repository from 'components/Repository'
import { getRepository } from 'graphql/queries'
import ErrorMessage from 'components/ErrorMessage'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  align-items: center;
  width: 1400px;
`

const SearchCardLayout = styled.div`
  max-width: 600px;
  width: 100%;
`

class Content extends Component {
  state = {
    repository: null,
    isLoading: false,
    errors: null,
  }

  handleSearchSuccess = ({ repository }) => this.setState({ repository, isLoading: false })

  handleStartSearch = () => this.setState({ repository: null, isLoading: true, errors: '' })

  render() {
    const { repository, errors } = this.state
    return (
      <Container>
        <PageTitle title="Should i use the NPM library?" />
        <ApolloConsumer>
          {client => (
            <SearchCardLayout>
              <SearchCard
                handleSearch={async (name, owner) => {
                  try {
                    this.handleStartSearch()
                    const { data } = await client.query({
                      query: gql(getRepository),
                      variables: { name, owner },
                    })
                    this.handleSearchSuccess(data)
                  } catch (errors) {
                    this.setState({ errors })
                  }
                }}
              />
            </SearchCardLayout>
          )}
        </ApolloConsumer>
        {repository && <Repository repository={repository} />}
        {errors && errors.graphQLErrors && errors.graphQLErrors.map(err => <ErrorMessage message={err.message} />)}
      </Container>
    )
  }
}

export default Content
