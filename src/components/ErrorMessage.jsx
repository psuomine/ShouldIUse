import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { H3 } from 'components/styles/Heading'

const Message = styled(H3)`
  margin-top: 24px;
`

const ErrorMessage = ({ message }) => <Message color="error">{message}</Message>

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
}

export default ErrorMessage
