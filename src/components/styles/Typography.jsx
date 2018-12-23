import styled from 'styled-components'

export const BodyText = styled.p`
  font-size: 16px;
  color: ${props => (props.muted ? props.theme.mutedText : props.theme.text)};
`

export const Subtitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.textSecondary};
`
