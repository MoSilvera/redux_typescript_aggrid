import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

interface Budget {
    id: number,
    customerId: number,
    amount: number,
    projectName: string
    

}
interface budgetState {
    value : Budget[]
}

let initialState: budgetState = {
    value: [{"id":1, "customerId":1, "amount":150000, "projectName":"Home Extension"}, {"id":2, "customerId":2, "amount":20000, "projectName":"commercial patio"}, {"id":3, "customerId":3, "amount":20000000, "projectName":"mixed use complex"}]
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
        let stateArray = [...state.value]
        let object = Object.assign({}, action.payload.data) 
        object[action.payload.property_to_edit]= action.payload.new_value
        stateArray.splice(action.payload.row_index, 1)
        stateArray.push(object)
        stateArray.sort((a, b) => a.id - b.id)
        state.value = stateArray

      }
    },
  });

  export const { addBudget, deleteBudget, editBudget } = budgetSlice.actions;

  export const selectBudgets = (state: RootState) => state.budgets.value;

  export default budgetSlice.reducer;


