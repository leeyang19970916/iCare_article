// import { CKEditor } from "ckeditor4-react"
import React, { Component, Fragment, useState, useRef, useEffect } from "react"
import "../../../scss/write/write.scss"
import WriteHeader from "./writeHeader"
import WriteSetting from "./writeSetting";
import CKEditor from "./ckEditor";
const Write = () => {
    let headerHeightRef = useRef()
    const [headerHeight, setHeaderHeight] = useState(0);
    useEffect(() => {
        let headerHeight = headerHeightRef.current.getBoundingClientRect().height
        setHeaderHeight(headerHeight)
    }, []);
    const styles = {
        height: `calc(100% - ${headerHeight}px)`
    };

    return (<Fragment>
        <div ref={headerHeightRef} className="w-100">

            <WriteHeader></WriteHeader>
        </div>
        <div className="d-flex w-100" style={styles}>
            <WriteSetting></WriteSetting>
            {/* 標籤 分類 標題  圖片*/}
            {/* 內容 */}
            <CKEditor></CKEditor>
        </div>
    </Fragment>)
}
export default Write