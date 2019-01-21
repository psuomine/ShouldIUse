import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconSvg = styled.svg`
  fill: ${({ color, theme }) => color || theme.primary};
`

const Icon = ({ icon, height, width, color }) => (
  <IconSvg data-testid="svg-icon" color={color} width={width} height={height}>
    <path data-testid="svg-icon-path" d={icon} />
  </IconSvg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
}

Icon.defaultProps = {
  height: 24,
  width: 24,
  color: '',
}

export default Icon
