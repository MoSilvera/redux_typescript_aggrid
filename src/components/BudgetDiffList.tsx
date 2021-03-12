import React, { Component } from 'react'
import { Budget } from '../reducers/budgetSlice'
import { connect, Connect } from 'react-redux'

const mapStateToProps = (state: {index:string, message:[]}) => {
    return {budgets: {state}}
}


 class BudgetDiff extends Component {
    state={
        budgets:[]
    }
    componentDidMount(){
        
    }
    render() {

        return (<>
            {this.state.budgets.map((budget: Budget) => <span>{budget.amount}</span>)}
        </>)
    }
}

export default connect(mapStateToProps)(BudgetDiff)