import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BodyText } from 'components/styles/Typography'

const ActionButton = styled.button`
  height: 71px;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  background-color: ${props => props.theme.primary};
  width: 100%;
  cursor: pointer;
  transition: background-color ease-in-out 0.3s;

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${props => props.theme.disabled};
  }
`

const CardActionButton = ({ type, title, isDisabled }) => (
  <ActionButton data-testid="action-button" type={type} disabled={isDisabled}>
    <BodyText color={isDisabled ? 'muted' : 'white'} fontWeight={500}>
      {title}
    </BodyText>
  </ActionButton>
)

CardActionButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
}

CardActionButton.defaultProps = {
  type: 'submit',
  isDisabled: false,
}

export default CardActionButton
