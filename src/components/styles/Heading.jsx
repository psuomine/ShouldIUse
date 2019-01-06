import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const headingStyles = css`
  color: ${props => props.theme.typography[props.color]};
  font-weight: 400;
  margin: 0;
  font-family: 'Montserrat';
`

export const H1 = styled.h1`
  font-size: 48px;
  ${headingStyles}
`

export const H2 = styled.h2`
  font-size: 34px;
  ${headingStyles}
`

export const H3 = styled.h3`
  font-size: 24px;
  letter-spacing: 1px;
  ${headingStyles}
`

const headingPropTypes = {
  color: PropTypes.oneOf(['text', 'textSecondary', 'white', 'muted', 'primary', 'error']),
}

const defaultPropTypes = {
  color: 'text',
}

H1.propTypes = headingPropTypes
H1.defaultProps = defaultPropTypes

H2.propTypes = headingPropTypes
H2.defaultProps = defaultPropTypes

H3.propTypes = headingPropTypes
H3.defaultProps = defaultPropTypes
