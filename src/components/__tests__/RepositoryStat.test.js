import React from 'react'
import { render } from 'testUtils'
import RepositoryStat from '../Repository/RepositoryStat'

describe('<SearchCard />', () => {
  it('renders prop values', () => {
    const { getByTestId } = render(
      <RepositoryStat title="lodash" value="8" isValid />
    )
    expect(getByTestId('stat-title').textContent).toBe('lodash')
    expect(getByTestId('stat-value').textContent).toBe('8')
  })

  it('renders success icon if isValid is true, snapshot', () => {
    const { container } = render(
      <RepositoryStat title="lodash" value="8" isValid />
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('renders error icon if isValid is true', () => {
    const { container } = render(
      <RepositoryStat title="lodash" value="8" isValid={false} />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
