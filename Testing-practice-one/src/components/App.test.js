import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

// Snapshot is for  Ui checking--->u for upadted

test('App snapshot test',()=>{
  const component=renderer.create(<App/>)
  const tree=component.toJSON();
  expect(tree).toMatchSnapshot()
})