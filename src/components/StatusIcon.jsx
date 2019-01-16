import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from 'components/Icon'
import { ICONS } from 'constants/index'

const IconBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background-color: ${props => (props.isValid ? 'rgba(23,195,123,.10)' : 'red')};
`

export default class StatusIcon extends Component {
  render() {
    const { isValid } = this.props
    return (
      <IconBackground isValid={isValid}>
        <Icon icon={ICONS.success} color="#00CC2D" height={18} />
      </IconBackground>
    )
  }
}

StatusIcon.propTypes = {
  isValid: PropTypes.bool.isRequired,
}
