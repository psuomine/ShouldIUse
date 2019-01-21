import React from 'react'
import { render } from 'testUtils'
import SearchCard from '../SearchCard'

const handlePostForm = jest.fn()

describe('<SearchCard />', () => {
  it('renders heading', () => {
    const { getByTestId, getByText } = render(
      <SearchCard handlePostForm={handlePostForm} />
    )
    expect(getByTestId('title')).toBeTruthy()
    expect(getByText('Search the npm package')).toBeDefined()
  })
})
