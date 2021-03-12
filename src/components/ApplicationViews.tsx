import React from "react"
import { Route } from "react-router-dom"
import { BudgetList } from '../components/BudgetList'
import BudgetDiffList from '../components/BudgetDiffList'
import { Home } from '../components/Home'

export const ApplicationViews = () => {
   return (
      <>
         <h1>App views</h1>
         <Route exact path="/">
            <Home />
         </Route>

         <Route exact path="/budgets">
            <BudgetList />
         </Route>

         <Route exact path="/budgetDiff">
            <BudgetDiffList />
         </Route>
      </>
   )
}