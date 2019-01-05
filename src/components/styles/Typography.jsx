import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const typographyStyles = css`
  font-family: 'Montserrat';
  font-weight: ${props => props.fontWeight};
  color: ${props => props.theme.typography[props.color]};
`

export const BodyText = styled.p`
  font-size: 16px;
  ${typographyStyles}
`

export const SmallerBodyText = styled.p`
  font-size: 14px;
  ${typographyStyles}
`

const typographyPropTypes = {
  fontWeight: PropTypes.oneOf([400, 500]),
  color: PropTypes.oneOf(['text', 'textSecondary', 'white', 'muted', 'primary']),
}

const typographyDefaultProps = {
  fontWeight: 400,
  color: 'text',
}

BodyText.propTypes = {
  ...typographyPropTypes,
}

BodyText.defaultProps = {
  ...typographyDefaultProps,
}

SmallerBodyText.propTypes = {
  ...typographyPropTypes,
}

SmallerBodyText.defaultProps = {
  ...typographyDefaultProps,
}
