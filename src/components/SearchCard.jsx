import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
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
  handleSearch = (name, owner) => {
    console.log('name', name)
    console.log('owner', owner)
  }

  render() {
    return (
      <Card>
        <CardContent>
          <H3>Search the npm package</H3>
        </CardContent>
        <SearchCardForm handleSearch={this.handleSearch} />
      </Card>
    )
  }
}

export default SearchCard
