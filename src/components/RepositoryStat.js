import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H3, H2 } from 'components/styles/Heading'

const Container = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
`

const RepositoryStat = ({ title, value }) => (
  <Container>
    <H3 data-testid="stat-title">{title}</H3>
    <H2 data-testid="stat-value">{value}</H2>
  </Container>
)

RepositoryStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default RepositoryStat
