import React from 'react'
import { render } from 'testUtils'
import CardActionButton from '../CardActionButton'

describe('<CardACtionButton />', () => {
  it('renders title based on title prop', () => {
    const title = 'Submit'
    const { getByTestId } = render(<CardActionButton title={title} />)
    expect(getByTestId('action-button').textContent).toBe(title)
  })

  it('button default type is submit', () => {
    const { getByTestId } = render(<CardActionButton title="default" />)
    expect(getByTestId('action-button').type).toBe('submit')
  })

  it('change button type to button', () => {
    const { getByTestId } = render(<CardActionButton title="default" type="button" />)
    expect(getByTestId('action-button').type).toEqual('button')
  })

  it('disable button', () => {
    const { getByTestId } = render(<CardActionButton title="default" type="button" isDisabled={true} />)
    expect(getByTestId('action-button').disabled).toBe(true)
  })
})
