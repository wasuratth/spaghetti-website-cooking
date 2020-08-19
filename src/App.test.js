import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import './matchMedia.mock';
import { Router, MemoryRouter } from 'react-router-dom'

import { createMemoryHistory } from 'history'


test('Reader Welcome Text', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/ยินดีต้อนรับสมาชิก/i);
  expect(linkElement).toBeInTheDocument();
});

test('Reader Register Text', () => {
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/คุณเป็นสมาชิกหรือยัง?/i);
  expect(linkElement).toBeInTheDocument();
});

test('Reader Login Button', () => {
  const { getByRole } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByRole('button');
  expect(linkElement).toBeInTheDocument();
});

test('Test Click Register ', () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(<Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  )
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(container.innerHTML).toMatch('เข้าสู่ระบบ')

  fireEvent.click(getByText(/สมัครสมาชิก/i))

  // check that the content changed to the new page
  expect(container.innerHTML).toMatch('สมัครสมาชิก')
  expect(container.innerHTML).toMatch('กรุณากรอกข้อมูลของท่าน')


})

 