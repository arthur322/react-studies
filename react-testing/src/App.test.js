import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('renders app component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('.App').length).toBe(1)
})
