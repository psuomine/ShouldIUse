import React from 'react'
import { render } from 'testUtils'
import RepositoryStat from '../RepositoryStat'

describe('<SearchCard />', () => {
  it('renders prop values', () => {
    const { getByTestId } = render(<RepositoryStat title="lodash" value="8" />)
    expect(getByTestId('stat-title').textContent).toBe('lodash')
    expect(getByTestId('stat-value').textContent).toBe('8')
  })

  it('snapshot', () => {
    const { container } = render(<RepositoryStat title="lodash" value="8" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
