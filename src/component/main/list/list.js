import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"
import Header from "../header";
import Sort from "./filter/sort";
import Table from "./table/table";
import "../../../scss/list/list.scss"
// const className = {

// }
const List = () => {

    return (
            <div className=" h-100 px-5 pt-4 pb-2">
            <Header title={"list"}></Header>
            <Sort></Sort>
            <Table></Table>
            </div>
    )
}
export default List