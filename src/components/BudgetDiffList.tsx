import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../app/store'
import { Budget } from '../reducers/budgetSlice'
import { Loan } from '../reducers/loanSlice'
import { Collateral } from '../reducers/collateralSlice'

const mapStateToProps = (state: RootState) => {
    return {budgets: state.budgets.value,
            collateral: state.collateral.value,
            loans: state.loans.value}
}

interface Props {
    budgets: Budget[],
    collateral: Collateral[] ,
    loans: Loan[]
}
 class BudgetDiff extends React.Component<Props>{
    state={
        budgets:[]
    }
    componentDidMount(){
        
    }
    render() {

        return (<>
            <h2>Budget Diff View</h2>
            {this.props.budgets.map((budget: Budget) => <span>{budget.amount}</span>)}
        </>)
    }
}

export default connect(mapStateToProps)(BudgetDiff);