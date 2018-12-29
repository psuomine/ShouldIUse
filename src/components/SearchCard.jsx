import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H3 } from 'components/styles/Heading'
import SearchCardForm from 'components/SearchCardForm'

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

const SearchCard = ({ handleSearch }) => (
  <Card>
    <CardContent>
      <H3>Search the npm package</H3>
    </CardContent>
    <SearchCardForm handleSearch={handleSearch} />
  </Card>
)

SearchCard.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default SearchCard
