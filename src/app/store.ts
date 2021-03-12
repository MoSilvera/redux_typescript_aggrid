import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import budgetsReducer from '../reducers/budgetSlice'

export const store = configureStore({
  reducer: {
    budgets: budgetsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
