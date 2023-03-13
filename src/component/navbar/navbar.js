import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import NavbarItem from "./navbarItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const className = {

// }
const Navbar = () => {

    return (
        <nav className="py-2 px-1">
            <NavLink activeClassName="btn-info text-white"
                className="btn btn-secondary text-white text-start w-100 mb-2 fw-bolder"
                exact to="/"><FontAwesomeIcon className="w-25" icon="fas fa-home" />首頁</NavLink>
            <NavLink activeClassName="btn-info text-white"
                className="btn btn-secondary text-white text-start w-100 mb-2 fw-bolder"
                to="/list"><FontAwesomeIcon className="w-25" icon="far fa-list-alt" />文章</NavLink>
            <NavLink activeClassName="btn-info text-white"
                className="btn btn-secondary text-white text-start w-100 mb-2 fw-bolder"
                to="/addArticle"><FontAwesomeIcon className="w-25" icon="fas fa-plus-square" />新增</NavLink>


        </nav>
    )
}
export default Navbar