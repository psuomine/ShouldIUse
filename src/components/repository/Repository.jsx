import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { getRepository } from 'graphql/queries'
import ErrorMessage from 'components/ErrorMessage'
import RepositoryHeader from 'components/repository/RepositoryHeader'
import RepositoryStats from 'components/repository/RepositoryStats'

const RepositoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  width: 100%;
`

const Repository = ({ name, owner }) => (
  <Query
    query={gql(getRepository)}
    variables={{ name, owner }}
    fetchPolicy="cache-and-network"
  >
    {({ data, loading, error }) => {
      if (loading) return <p>Loading</p>

      if (error) {
        const {
          graphQLErrors = [{ message: 'Unknown error, please try again' }],
        } = error

        return <ErrorMessage message={graphQLErrors[0].message} />
      }

      const { repository } = data
      return (
        <RepositoryContainer>
          <RepositoryHeader
            homepageUrl={repository.homepageUrl}
            name={repository.name}
            description={repository.description}
          />
          <RepositoryStats repository={repository} />
        </RepositoryContainer>
      )
    }}
  </Query>
)

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
}

export default Repository
