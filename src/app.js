import React, { Fragment, useState,useEffect } from "react"
import { Route, } from "react-router-dom"
import Navbar from "./component/navbar/navbar";
import Main from "./component/main/main";
import "./scss/common.scss"
// import {}
// const className = {

// }
const App = () => {
    const initHeight = window.innerHeight;

    const [height, setHeight] = useState(initHeight);

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div className="w-100 d-flex overflow-hidden"  style={{ height: height }}>
            <div className="h-100 bg-dark" style={{ width: '20%' }}>
                <Navbar></Navbar>
            </div>
            <div className="h-100 " style={{ width: '80%', background: "rgb(241,241,241)",overflowY:"auto" }}>
                <Main></Main>
            </div>


        </div>
    )
}
export default App