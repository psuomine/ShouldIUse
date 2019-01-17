import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Icon from 'components/Icon'
import { ICONS } from 'constants/index'

const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${({ theme, isValid }) => (isValid ? theme.successBackground : theme.errorBackground)};
`
const StatusIcon = ({ isValid, theme }) => (
  <IconBackground isValid={isValid}>
    <Icon
      icon={isValid ? ICONS.success : ICONS.error}
      color={isValid ? theme.success : theme.error}
      height={isValid ? 18 : 24}
    />
  </IconBackground>
)

StatusIcon.propTypes = {
  isValid: PropTypes.bool.isRequired,
}

export default withTheme(StatusIcon)
