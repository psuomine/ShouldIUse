import React from 'react'
import { shallow } from 'enzyme'
import SearchCard from '../SearchCard'
import { H3 } from 'components/styles/Heading'

describe('SearchCard', () => {
  it('renders heading', () => {
    const wrapper = shallow(<SearchCard />)
    expect(wrapper.find(H3)).toHaveLength(1)
  })

  it('renders title', () => {
    const wrapper = shallow(<SearchCard />)
    expect(wrapper.find(H3).text()).toEqual('Search the npm package')
  })

  it('renders button', () => {
    const wrapper = shallow(<SearchCard />)
    expect(wrapper.exists('.search-btn')).toBeTruthy()
  })
})
