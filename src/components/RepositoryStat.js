import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H1 } from 'components/styles/Heading'
import { BodyText } from 'components/styles/Typography'
import StatusIcon from 'components/StatusIcon'

const Container = styled.div`
  display: flex;
  width: 280px;
  height: 245px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  background-color: white;
  border-radius: 4px;
  padding: 24px;
`

const Value = styled(H1)`
  margin-top: 24px;
  font-weight: 700;
  letter-spacing: 2.5px;
`

const RepositoryStat = ({ title, value, isValid }) => {
  return (
    <Container>
      <StatusIcon isValid={isValid} />
      <Value data-testid="stat-value" color="primary">
        {value}
      </Value>
      <BodyText data-testid="stat-title" color="muted">
        {title}
      </BodyText>
    </Container>
  )
}

RepositoryStat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default RepositoryStat
