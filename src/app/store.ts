import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import budgetsReducer from '../reducers/budgetSlice'
import collateralReducer from '../reducers/collateralSlice'
import loansReducer from '../reducers/loanSlice'

export const store = configureStore({
  reducer: {
    budgets: budgetsReducer,
    collateral: collateralReducer,
    loans: loansReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
