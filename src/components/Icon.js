import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconSvg = styled.svg`
  fill: ${({ color, theme }) => (color ? color : theme.primary)};
`

const Icon = ({ icon, height, width, color }) => (
  <IconSvg color={color} width={width} height={height}>
    <path d={icon} />
  </IconSvg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

Icon.defaultProps = {
  height: 24,
  width: 24,
}

export default Icon
