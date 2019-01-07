import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H3, H2 } from 'components/styles/Heading'

const Container = styled.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`

const Title = styled(H3)`
  margin-bottom: 8px;
`

const RepositoryStat = ({ title, value }) => (
  <Container>
    <Title data-testid="stat-title" color="muted">
      {title}
    </Title>
    <H2 data-testid="stat-value" color="primary">
      {value}
    </H2>
  </Container>
)

RepositoryStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default RepositoryStat
