import React from 'react'
import { render } from 'testUtils'
import Icon from '../Icon'

const iconPath = 'M7.42449 14.5737L2.42002'

describe('<Icon />', () => {
  it('renders icon based on props', () => {
    const { getByTestId } = render(<Icon icon={iconPath} />)
    const icon = getByTestId('svg-icon')
    const svgPath = getByTestId('svg-icon-path')
    expect(svgPath).toHaveAttribute('d')
    expect(icon.firstChild).toMatchSnapshot()
  })
})
