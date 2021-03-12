import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';
import { Budget } from '../models/Budget';


interface budgetState {
    value : Budget[]
}

let initialState: budgetState = {
    value: [new Budget(1, 1, 150000, "Home Extension"), new Budget(2, 2, 2000000, "Mixed Use Development"), new Budget(3,3, 20000, "Commercial Patio")]
}

export const budgetSlice = createSlice({
    name: 'budgets',
    initialState,
    reducers: {
      addBudget: (state, action) => {
       state.value = [...state.value, action.payload]
      },
      deleteBudget: (state, action) => {
         
      },
      editBudget: (state, action) => {
        

      }
    },
  });

  export const { addBudget, deleteBudget, editBudget } = budgetSlice.actions;

  export const selectBudgets = (state: RootState) => state.budgets.value;

  export default budgetSlice.reducer;


