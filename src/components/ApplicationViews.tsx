import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
   return (
      <>
         <h1>App views</h1>
         <Route exact path="/">
         </Route>

         <Route exact path="/budgets">
         </Route>

         <Route exact path="/budgetDiff">
         </Route>
      </>
   )
}