import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import BudgetDiff from './components/BudgetDiffList'
import { BudgetList } from './components/BudgetList'


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

jest.mock('./components/BudgetList')

test("Should render Budget list on /budgets route", () => {

  (BudgetList as jest.Mock).mockImplementation(() => <div>BudgetListMock</div>);
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/budgets"]}>
        <App />  
      </MemoryRouter>      
    </Provider>)

    expect(getByText("BudgetListMock")).toBeInTheDocument();

})