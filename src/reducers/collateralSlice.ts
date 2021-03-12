import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../app/store';

export interface Collateral {
    id: number,
    budgetId: number,
    value: number,
    description: string

}
interface collateralState {
    value : Collateral[]
}

let initialState: collateralState = {
    value: [{"id": 1, "budgetId": 1, "value": 700, "description":"vehicle"},{"id": 4, "budgetId": 1, "value": 900000, "description":"trust"}, {"id": 2, "budgetId": 2, "value": 400000, "description":"real estate"},{"id": 3, "budgetId": 3, "value": 25000, "description":"diamond ring"}]
}

export const collateralSlice = createSlice({
    name: 'collateral',
    initialState,
    reducers: {
      addCollateral: (state, action) => {
       state.value = [...state.value, action.payload]
      }
    },
  });

  export const { addCollateral } = collateralSlice.actions;

  export const selectCollateral = (state: RootState) => state.collateral.value;

  export default collateralSlice.reducer;
