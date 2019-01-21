import React from 'react'
import { render, fireEvent, wait } from 'testUtils'
import SearchCardForm from '../SearchCardForm'

describe('<SearchCard />', () => {
  it('calls handleSearch on button click, when form is valid', async () => {
    const handlePostFormSpy = jest.fn()
    const { getByTestId, getByPlaceholderText } = render(
      <SearchCardForm handlePostForm={handlePostFormSpy} />
    )
    const nameInput = getByPlaceholderText('Package name')
    const ownerInput = getByPlaceholderText('Package owner')

    fireEvent.change(nameInput, { target: { value: 'lodash' } })
    fireEvent.change(ownerInput, { target: { value: 'lodash' } })
    fireEvent.click(getByTestId('action-button'))

    await wait(() => {
      expect(handlePostFormSpy).toHaveBeenCalledTimes(1)
    })
  })

  it('calls handleSearch on button click with values of name and owner', async () => {
    const handlePostFormSpy = jest.fn()
    const { getByTestId, getByPlaceholderText } = render(
      <SearchCardForm handlePostForm={handlePostFormSpy} />
    )
    const nameInput = getByPlaceholderText('Package name')
    const ownerInput = getByPlaceholderText('Package owner')

    fireEvent.change(nameInput, { target: { value: 'lodash' } })
    fireEvent.change(ownerInput, { target: { value: 'lodash' } })
    fireEvent.click(getByTestId('action-button'))

    await wait(() => {
      expect(handlePostFormSpy).toHaveBeenCalledWith('lodash', 'lodash')
    })
  })

  it('handleSearch is not called when form is invalid on button click', async () => {
    const handlePostFormSpy = jest.fn()
    const { getByTestId } = render(
      <SearchCardForm handlePostForm={handlePostFormSpy} />
    )

    fireEvent.click(getByTestId('action-button'))

    await wait(() => {
      expect(handlePostFormSpy).toHaveBeenCalledTimes(0)
    })
  })

  it('action button is disabled when form is dirty', () => {
    const handlePostFormSpy = jest.fn()
    const { getByTestId } = render(
      <SearchCardForm handlePostForm={handlePostFormSpy} />
    )

    expect(getByTestId('action-button').disabled).toBe(true)
  })

  it('the form is reseted after submit', async () => {
    const { getByTestId, getByPlaceholderText } = render(
      <SearchCardForm handlePostForm={() => {}} />
    )
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
