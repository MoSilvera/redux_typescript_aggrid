import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";


test('nav bar contains proper links', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <App />  
      </Router>      
    </Provider>
  );

  expect(getByText("Budget Differential")).toBeInTheDocument();
  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText ("Budgets")).toBeInTheDocument();
});
