import React from 'react'
import styled from 'styled-components'
import PageTitle from 'components/PageTitle'

const Container = styled.div`
  margin-top: 96px;
  text-align: center;
`

const Content = () => (
  <Container>
    <PageTitle title="Should i use the NPM library?" />
  </Container>
)

export default Content
