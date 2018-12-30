import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import Theme from 'theme/theme'
import CardActionButton from '../CardActionButton'

afterEach(cleanup)

const renderComponent = (title, type, isDisabled) =>
  render(
    <ThemeProvider theme={Theme}>
      <CardActionButton title={title} type={type} isDisabled={isDisabled} />
    </ThemeProvider>
  )

describe('<CardACtionButton />', () => {
  it('renders title based on title prop', () => {
    const title = 'Submit'
    const { getByTestId } = renderComponent(title)
    expect(getByTestId('action-button').textContent).toBe(title)
  })

  it('button default type is submit', () => {
    const { getByTestId } = renderComponent('Title')
    expect(getByTestId('action-button').type).toBe('submit')
  })

  it('change button type to button', () => {
    const { getByTestId } = renderComponent('Title', 'button')
    expect(getByTestId('action-button').type).toEqual('button')
  })

  it('disable button', () => {
    const { getByTestId } = renderComponent('Title', 'button', true)
    expect(getByTestId('action-button').disabled).toBe(true)
  })
})
