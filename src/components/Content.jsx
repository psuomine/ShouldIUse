import React, { Component } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { ApolloConsumer } from 'react-apollo'
import PageTitle from 'components/PageTitle'
import SearchCard from 'components/SearchCard'
import Repository from 'components/Repository'
import { getRepository } from 'graphql/queries'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  align-items: center;
  max-width: 1400px;
`

const SearchCardLayout = styled.div`
  max-width: 600px;
  width: 100%;
`

class Content extends Component {
  state = {
    repository: null,
    isLoading: false,
  }

  handleSearchSuccess = ({ repository }) => this.setState({ repository, isLoading: false })

  handleStartSearch = () => this.setState({ repository: null, isLoading: true })

  render() {
    const { repository } = this.state
    return (
      <Container>
        <PageTitle title="Should i use the NPM library?" />
        <ApolloConsumer>
          {client => (
            <SearchCardLayout>
              <SearchCard
                handleSearch={async (name, owner) => {
                  this.handleStartSearch()
                  const { data } = await client.query({
                    query: gql(getRepository),
                    variables: { name, owner },
                  })
                  this.handleSearchSuccess(data)
                }}
              />
            </SearchCardLayout>
          )}
        </ApolloConsumer>
        {repository && <Repository repository={repository} />}
      </Container>
    )
  }
}

export default Content
