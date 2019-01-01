import React from 'react'
import { render } from 'testUtils'
import SearchCard from '../SearchCard'

const handleSearch = jest.fn()

describe('<SearchCard />', () => {
  it('renders heading', () => {
    const { getByTestId } = render(<SearchCard handleSearch={handleSearch} />)
    expect(getByTestId('title')).toBeTruthy()
  })

  it('renders title', () => {
    const { getByText } = render(<SearchCard handleSearch={handleSearch} />)
    expect(getByText('Search the npm package')).toBeDefined()
  })
})
