import React from 'react'
import { Link } from "react-router-dom"
import "./components.css"

export const Navbar = () => {
    return (<>
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/budgets">Budgets</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/budgetDiff">Budget Differential</Link>
            </li>
        </ul>
    </>)
}