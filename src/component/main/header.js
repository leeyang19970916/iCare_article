import React, { Fragment } from "react"
import { Route, NavLink } from "react-router-dom"

// const className = {

// }
const Header = (props) => {
let {title}=props
let titleUI="首頁"
if (title==="list") {
    titleUI="文章"
}
    return (
<header className="fw-bolder text-primary fs-3">{titleUI}</header>
    )
}
export default Header