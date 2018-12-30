import React from 'react'
import { render, cleanup } from 'react-testing-library'
import { ThemeProvider } from 'styled-components'
import Theme from 'theme/theme'
import PageTitle from '../PageTitle'

afterEach(cleanup)

const renderComponent = title =>
  render(
    <ThemeProvider theme={Theme}>
      <PageTitle title={title} />
    </ThemeProvider>
  )

describe('<PageTitle />', () => {
  it('renders h1 element', () => {
    const { container } = renderComponent('Headline')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders title based on props', () => {
    const title = 'Long title'
    const { getByText } = renderComponent(title)
    expect(getByText(title).textContent).toEqual(title)
  })
})
