import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new EnzymeAdapter() });
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props}/>)
  if (state) wrapper.setState(state)
  return wrapper
}

test('render without error', () => {
  const wrapper = setup()
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})
test('render increment button', () => {
  const wrapper = setup()
  const button = wrapper.find("[data-test='button']")
  expect(button.length).toBe(1)
})
test('counter display', () => {
  const wrapper = setup()
  const counter= wrapper.find("[data-test='counter-display']")
  expect(counter.length).toBe(1)
})
test('counter starts zero', () => {
  const wrapper = setup()
  const initState = wrapper.state('counter')
  expect(initState).toBe(0)
})
test('click button increments counter display', () => {
  const counter = 7
  const wrapper = setup(null, { counter });
  const button = wrapper.find("[data-test='button']")
  button.simulate('click');
  wrapper.update();
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.text()).toContain(counter + 1)
})

