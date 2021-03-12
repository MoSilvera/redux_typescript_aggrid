import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBudget, selectBudgets, deleteBudget, editBudget } from '../reducers/budgetSlice';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ValueGetterParams, ValueSetterParams } from 'ag-grid-community';
import { RowNode, RowNodeEvent } from 'ag-grid-community/dist/lib/entities/rowNode';
import { Budget } from '../models/Budget'


export const BudgetList = () => {
    const budgets = useSelector(selectBudgets);
    const dispatch = useDispatch();
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [newBudget, setNewBudget] = useState({})

    const [rowData, setRowData] = useState([
        ...budgets
    ]);
    useEffect(() => {
        setRowData(budgets)
    }, [budgets])

    const handleFieldChange = (evt:any) => {
        if (evt !== null){
            const stateToChange: {[index:string]: {message: any} } = Object.assign({}, newBudget)
            stateToChange[evt.target.name] = evt.target.value
            console.log(stateToChange)
            setNewBudget(stateToChange)
        }
      

        
      }

  return (
     <> 
        <h1>Current Budgets</h1>
        <span>Add Budget</span> 
            <input type="text" name="userId" placeholder="userId" onChange={handleFieldChange}></input>
            <input type="text" name="customerId" placeholder="Customer Id"></input>
            <input type="text" name="amount" placeholder="amount"></input>
            <input type="text" name="projectName" placeholder="Project Name"></input>


            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <AgGridReact  immutableData={true}
                rowData={rowData} getRowNodeId={(data) => data.id} >
                    
                <AgGridColumn field="id"></AgGridColumn>
                <AgGridColumn 
                    field="customerId"></AgGridColumn>
                <AgGridColumn 
                    editable={true} 
                    field="amount"></AgGridColumn>
            </AgGridReact>
        </div>
     </>
  )   
}