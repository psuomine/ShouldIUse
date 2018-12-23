import React from 'react'
import { shallow } from 'enzyme'
import PageTitle from '../PageTitle'

describe('PageTitle', () => {
  it('renders h1 element', () => {
    const wrapper = shallow(<PageTitle />)
    expect(wrapper.find('h1')).toBeTruthy()
  })

  it('renders title based on props', () => {
    const title = 'Page Title'
    const wrapper = shallow(<PageTitle title={title} />)
    expect(wrapper.find('h1').text()).toEqual(title)
  })
})
