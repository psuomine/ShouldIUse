import React from 'react'
import { render, fireEvent, wait } from 'testUtils'
import SearchCardForm from '../SearchCardForm'

const handleSearchSpy = jest.fn()

describe('<SearchCard />', () => {
  it('calls handleSearch on button click', async () => {
    const { getByTestId } = render(<SearchCardForm handleSearch={handleSearchSpy} />)
    fireEvent.click(getByTestId('action-button'))
    await wait(() => {
      expect(handleSearchSpy).toHaveBeenCalledTimes(1)
    })
  })
})
