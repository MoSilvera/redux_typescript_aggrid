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
            {this.props.budgets.map((budget: Budget) => {
                return (
                    
                    <div key={"budget"+ budget.id}>
                        <hr></hr>
                        <h3>{budget.projectName}: {budget.amount}</h3>
                        <hr></hr>
                        <b>Available Collateral</b>
                        <div>
                            {this.props.collateral.filter((singleColat) => singleColat.budgetId === budget.id).map((filteredColat) => <p key={filteredColat.id}>{filteredColat.description}: ${filteredColat.value} </p>)}
                        </div>
                        <b>Approved Loans</b>
                        <div>
                            {this.props.loans.filter((loan) => loan.budgetId === budget.id).map((filteredLoan) => <div key={"filteredload" + filteredLoan.id}>{filteredLoan.bank}: ${filteredLoan.amount}
                                <ul>
                                    <li>Terms:{filteredLoan.terms} years</li>
                                    <li>Interest Rate: {filteredLoan.interest * 100}%</li>
                                    </ul>
                                </div>)}
                        </div>

                    </div>
                    
                )

            })}
        </>)
    }
}

export default connect(mapStateToProps)(BudgetDiff);