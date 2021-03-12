import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBudget, selectBudgets, deleteBudget, editBudget } from '../reducers/budgetSlice';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ValueGetterParams, ValueSetterParams } from 'ag-grid-community';
import { RowNode, RowNodeEvent } from 'ag-grid-community/dist/lib/entities/rowNode';


export const BudgetList = () => {
    const budgets = useSelector(selectBudgets);
    const dispatch = useDispatch();
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [newBudget, setNewBudget] = useState({})

    const [rowData, setRowData] = useState([
        ...budgets
    ]);
    useEffect(() => {
        console.log(budgets)
        console.log("use effect")
        setRowData(budgets)
    }, [budgets])

    const handleFieldChange = (evt: any) => {
        const stateToChange: { [index: string]: { message: any } } = Object.assign({}, newBudget)
        stateToChange[evt.target.name] = evt.target.value
        console.log(stateToChange)
        setNewBudget(stateToChange)

    }


    const getter_function = (params: ValueGetterParams) => {
        return (params.data[params.column.getColId()])
    }
    const setter_function = (params: ValueSetterParams) => {
        let param_obj = {
            "data": params.data,
            "property_to_edit": params.column.getColId(),
            "new_value": params.newValue,
            "row_index": params.node?.rowIndex
        }
        console.log(param_obj)
        dispatch(editBudget(param_obj))
        return true
    }

    return (
        <>
            <h1>Current Budgets</h1>
            <button onClick={() =>dispatch(addBudget(newBudget))}>Add Budget</button>
            <input type="text" name="id" placeholder="id" onChange={handleFieldChange}></input>
            <input type="text" name="customerId" placeholder="Customer Id" onChange={handleFieldChange}></input>
            <input type="text" name="amount" placeholder="amount" onChange={handleFieldChange}></input>
            <input type="text" name="projectName" placeholder="Project Name" onChange={handleFieldChange}></input>


            <div className="ag-theme-alpine" style={{ height: 400, width: 900 }}>
                <AgGridReact immutableData={true}
                    rowData={rowData} getRowNodeId={(data) => data.id} >

                    <AgGridColumn field="id"></AgGridColumn>
                    <AgGridColumn
                        field="customerId"></AgGridColumn>
                    <AgGridColumn
                        valueGetter={(e) => getter_function(e)}
                        valueSetter={(e) => setter_function(e)}
                        editable={true}
                        field="amount"></AgGridColumn>
                    <AgGridColumn
                        valueGetter={(e) => getter_function(e)}
                        valueSetter={(e) => setter_function(e)}
                        editable={true}
                        field="projectName"></AgGridColumn>
                </AgGridReact>
            </div>
        </>
    )
}