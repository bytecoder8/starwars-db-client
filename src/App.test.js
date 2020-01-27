import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Navbar from './components/Navbar'

describe('<App />', () => {
  it('Renders Navbar', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper.debug())
    expect(wrapper.find(Navbar).length).toBe(1)
  })
})
