import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props, state) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)

  return wrapper
}

const findElement = (wrapper, testAttr) => {
  return wrapper.find(`[data-test="${testAttr}"]`)
}

test('renders app component', () => {
  const wrapper = setup()
  expect(findElement(wrapper, 'app').length).toBe(1)
})

test('renders app counter', () => {
  const wrapper = setup()
  const counter = findElement(wrapper, 'counter')

  expect(counter.length).toBe(1)
})

test('renders the increment button', () => {
  const wrapper = setup()
  const button = findElement(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('counter starts at zero', () => {
  const wrapper = setup()
  const initialState = wrapper.state('counter')
  expect(initialState).toBe(0)
})

test('increment button click will add to counter', () => {
  const initialCount = 4
  const wrapper = setup(null, { counter: initialCount })

  const button = findElement(wrapper, 'increment-button')
  button.simulate('click')

  const counter = findElement(wrapper, 'counter')
  expect(counter.text()).toContain(initialCount + 1)
})

test('renders decrement counter', () => {
  const wrapper = setup()
  const button = findElement(wrapper, 'decrement-button')
  expect(button.length).toBe(1)
})

test('decrement button click will decrease counter', () => {
  const initialCount = 6
  const wrapper = setup(null, { counter: initialCount })

  const button = findElement(wrapper, 'decrement-button')
  button.simulate('click')

  const counter = findElement(wrapper, 'counter')
  expect(counter.text()).toContain(initialCount - 1)
})
