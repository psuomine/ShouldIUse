import styled, { css } from 'styled-components'

const headingStyles = css`
  color: ${props => props.theme.text};
  font-weight: 400;
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
  ${headingStyles}
`
