import React from 'react'
import { shallow } from 'enzyme'
import CardActionButton from '../CardActionButton'

describe('CardActionButton', () => {
  it('renders button element', () => {
    const wrapper = shallow(<CardActionButton title="Submit" />)
    expect(wrapper.find('.action-button')).toHaveLength(1)
  })

  it('renders title', () => {
    const wrapper = shallow(<CardActionButton title="Submit" />)
    expect(wrapper.find('.action-button').text()).toEqual('Submit')
  })

  it('button default type is submit', () => {
    const wrapper = shallow(<CardActionButton title="Submit" />)
    expect(wrapper.find('.action-button').prop('type')).toEqual('submit')
  })

  it('change button type to button', () => {
    const wrapper = shallow(<CardActionButton title="Submit" type="button" />)
    expect(wrapper.find('.action-button').prop('type')).toEqual('button')
  })

  it('disable button', () => {
    const wrapper = shallow(<CardActionButton title="Submit" isDisabled={true} />)
    expect(wrapper.find('.action-button').prop('disabled')).toBeTruthy()
  })
})
