import React from 'react'
import { render, fireEvent, wait } from 'testUtils'
import SearchCardForm from '../SearchCardForm'

describe('<SearchCard />', () => {
  it('calls handleSearch on button click, when form is valid', async () => {
    const handleSearchSpy = jest.fn()
    const { getByTestId, getByPlaceholderText } = render(<SearchCardForm handleSearch={handleSearchSpy} />)
    const nameInput = getByPlaceholderText('Package name')
    const ownerInput = getByPlaceholderText('Package owner')

    fireEvent.change(nameInput, { target: { value: 'lodash' } })
    fireEvent.change(ownerInput, { target: { value: 'lodash' } })
    fireEvent.click(getByTestId('action-button'))

    await wait(() => {
      expect(handleSearchSpy).toHaveBeenCalledTimes(1)
    })
  })

  it('calls handleSearch on button click with values of name and owner', async () => {
    const handleSearchSpy = jest.fn()
    const { getByTestId, getByPlaceholderText } = render(<SearchCardForm handleSearch={handleSearchSpy} />)
    const nameInput = getByPlaceholderText('Package name')
    const ownerInput = getByPlaceholderText('Package owner')

    fireEvent.change(nameInput, { target: { value: 'lodash' } })
    fireEvent.change(ownerInput, { target: { value: 'lodash' } })
    fireEvent.click(getByTestId('action-button'))

    await wait(() => {
      expect(handleSearchSpy).toHaveBeenCalledWith('lodash', 'lodash')
    })
  })

  it('handleSearch is not called when form is invalid on button click', async () => {
    const handleSearchSpy = jest.fn()
    const { getByTestId } = render(<SearchCardForm handleSearch={handleSearchSpy} />)

    fireEvent.click(getByTestId('action-button'))

    await wait(() => {
      expect(handleSearchSpy).toHaveBeenCalledTimes(0)
    })
  })

  it('action button is disabled when form is dirty', () => {
    const handleSearchSpy = jest.fn()
    const { getByTestId } = render(<SearchCardForm handleSearch={handleSearchSpy} />)

    expect(getByTestId('action-button').disabled).toBe(true)
  })

  it('the form is reseted after submit', async () => {
    const { getByTestId, getByPlaceholderText } = render(<SearchCardForm handleSearch={() => {}} />)
    const nameInput = getByPlaceholderText('Package name')
    const ownerInput = getByPlaceholderText('Package owner')

    fireEvent.change(nameInput, { target: { value: 'lodash' } })
    fireEvent.change(ownerInput, { target: { value: 'lodash' } })
    fireEvent.click(getByTestId('action-button'))

    await wait(() => {
      expect(nameInput.textContent).toBe('')
      expect(ownerInput.textContent).toBe('')
    })
  })
})
