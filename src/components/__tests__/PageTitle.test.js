import React from 'react'
import { render } from 'testUtils'
import PageTitle from '../PageTitle'

describe('<PageTitle />', () => {
  it('renders h1 element', () => {
    const { container } = render(<PageTitle title="Headline" />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders title based on props', () => {
    const title = 'Long title'
    const { getByText } = render(<PageTitle title={title} />)
    expect(getByText(title).textContent).toEqual(title)
  })
})
