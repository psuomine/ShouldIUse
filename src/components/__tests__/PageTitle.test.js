import React from 'react'
import { shallow } from 'enzyme'
import PageTitle from '../PageTitle'
import { H1 } from 'components/styles/Heading'

describe('PageTitle', () => {
  it('renders H1 component', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find(H1)).toBeTruthy()
  })

  it('renders title based on props', () => {
    const title = 'Page Title'
    const wrapper = shallow(<PageTitle title={title} />)
    expect(wrapper.find(H1).text()).toEqual(title)
  })
})
