import React, { Component } from 'react'
import styled from 'styled-components'
import { H3 } from 'components/styles/Heading'
import SearchCardForm from 'components/SearchCardForm'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 48px;
  border-radius: 20px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.16);
`

const CardContent = styled.div`
  text-align: left;
  padding: 48px 48px 0 48px;
`

class SearchCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <H3>Search the npm package</H3>
        </CardContent>
        <SearchCardForm />
      </Card>
    )
  }
}

export default SearchCard
