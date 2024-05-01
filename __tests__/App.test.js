/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MyProps from '../MyProps';

// test('renders correctly', () => {
//   const snapshot = renderer.create(<App />).toJSON();
//   expect(snapshot).toMatchSnapshot();
// });

// test('function testing', () => {
//   const AppRef = renderer.create(<App/>).getInstance();
//   const input = AppRef.getData(2);
//   console.log("AppRef", input);
//   expect(AppRef.getData(2)).toEqual(12);
// })

// test('test testing', () => {
//   const AppRef = renderer.create(<App/>).getInstance();
//    AppRef.getData(2);
//   expect(AppRef.state.counter).toEqual(2)
//  })

// describe('function testing glpbally' , () => {
//   test('global function calling', () => {
//     const input = testFunction(20);
//     const output = 20;

//     expect(input).toEqual(output);

//   })
// })

test('props testing', () => {
  const AppRef = renderer.create(<MyProps name={'Sonali'}/>).getInstance();
 console.log( AppRef.children.props.children)
})