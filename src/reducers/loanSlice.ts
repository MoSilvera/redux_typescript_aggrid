import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

export interface Loan {
    id: number,
    budgetId: number,
    amount: number,
    bank: string,
    terms: number,
    interest: number

}
interface loanState {
    value : Loan[]
}

let initialState: loanState = {
    value: [{"id": 1, "budgetId": 1, "amount": 73836, "bank":"local credit union", "terms": 5, "interest":0.04}, {"id": 2, "budgetId": 2, "amount": 3000, "bank":"bank of america", "terms": 2, "interest":0.02},{"id": 3, "budgetId": 3, "amount": 1000, "bank":"loans r' us", "terms": 10, "interest":0.08}, {"id": 4, "budgetId": 3, "amount": 55521, "bank":"Big 'ol bank", "terms": 5, "interest":0.1}, {"id": 5, "budgetId": 3, "amount": 1000000, "bank":"loan-o-rama", "terms": 20, "interest":0.04}]
}

export const loanSlice = createSlice({
    name: 'loans',
    initialState,
    reducers: {
      addLoan: (state, action) => {
       state.value = [...state.value, action.payload]
      }
    },
  });

  export const { addLoan } = loanSlice.actions;

  export const selectLoans = (state: RootState) => state.loans.value;

  export default loanSlice.reducer;
