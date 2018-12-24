import React, { Component } from 'react'
import styled from 'styled-components'
import { H3 } from 'components/styles/Heading'
import { BodyText } from 'components/styles/Typography'

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

const Button = styled.button`
  height: 71px;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  background-color: ${props => props.theme.primary};
`

class SearchCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <H3>Search the npm package</H3>
        </CardContent>
        <Button className="search-btn">
          <BodyText color="white" fontWeight={500}>
            SEARCH PACKAGE
          </BodyText>
        </Button>
      </Card>
    )
  }
}

export default SearchCard
