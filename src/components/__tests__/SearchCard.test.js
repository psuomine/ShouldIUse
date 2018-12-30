import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import Theme from 'theme/theme'
import SearchCard from '../SearchCard'

afterEach(cleanup)

const renderComponent = () =>
  render(
    <ThemeProvider theme={Theme}>
      <SearchCard handleSearch={() => {}} />
    </ThemeProvider>
  )

describe('<SearchCard />', () => {
  it('renders heading', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('title')).toBeTruthy()
  })

  it('renders title', () => {
    const { getByText } = renderComponent()
    expect(getByText('Search the npm package')).toBeDefined()
  })
})
