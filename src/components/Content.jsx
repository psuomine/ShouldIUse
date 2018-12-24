import React from 'react'
import styled from 'styled-components'
import PageTitle from 'components/PageTitle'
import SearchCard from 'components/SearchCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 96px;
  align-items: center;
  text-align: center;
`

const SearchCardLayout = styled.div`
  max-width: 600px;
  width: 100%;
`

const Content = () => (
  <Container>
    <PageTitle title="Should i use the NPM library?" />
    <SearchCardLayout>
      <SearchCard />
    </SearchCardLayout>
  </Container>
)

export default Content
