import React from 'react'
import { render } from 'testUtils'
import ErrorMessage from '../ErrorMessage'

describe('<ErrorMessage />', () => {
  it('renders error message based on props', () => {
    const message = 'Error happened!'
    const { getByText } = render(<ErrorMessage message={message} />)
    expect(getByText(message).textContent).toEqual(message)
  })

  it('snapshot', () => {
    const { container } = render(<ErrorMessage message="error happened" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
