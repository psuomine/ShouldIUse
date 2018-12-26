import styled, { css } from 'styled-components'
import { Field } from 'formik'

const placeholderStyles = css`
  font-family: 'Montserrat';
  color: ${props => props.theme.typography.textSecondary};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
`

const SearchCardField = styled(Field)`
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  height: 68px;
  border-radius: 8px;
  background-color: ${props => props.theme.background};
  padding-left: 24px;
  color: ${props => props.theme.typography.text};
  border: none;
  margin-bottom: 32px;

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    ${placeholderStyles}
  }

  &::-moz-placeholder {
    ${placeholderStyles}
  }
  &:-ms-input-placeholder {
    ${placeholderStyles}
  }
  &:-moz-placeholder {
    ${placeholderStyles}
  }
`

export default SearchCardField
