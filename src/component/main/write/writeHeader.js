import { CKEditor } from "ckeditor4-react"
import React, { Component, Fragment } from "react"
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { resetState, buildDate, buildID } from "../../../store/articleSlice";
import { addList } from "../../../store/listSlice";

const Today = () => {
    // const date = new Date();
    // const id = date.valueOf().toString();
    // console.log(date.toLocaleDateString(),"datedatedate")
    var today = new Date();
    const id = today.valueOf().toString();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    let item = {
        today, id
    }
    return item
}
const WriteSetting = (props) => {
    let dispatch = useDispatch()
    let history = useHistory()
    let article = useSelector(state => state.article)
    const saveArticleHandler = () => {
        // 主標副標 內容至少都要有內容不然推額
        let { id, today } = Today()

        dispatch(buildID(id))
        dispatch(buildDate(today))
        article = { ...article, id, date: today }
        console.log(article,"article")
        let {majTitle,minTitle,content}=article
        if (!majTitle || !minTitle || !content) {
            console.log("主標副標內文有一個沒值")
            alert("主標副標內文有一個沒值")
            return
        }
        dispatch(addList(article))
        dispatch(resetState())
        history.push("/list");
    }
    return (<Fragment>
        <div className="bg-white py-3 px-4 d-flex justify-content-end">
            <button type="button" className="btn btn-primary px-4 mx-3" onClick={saveArticleHandler}>儲存文章</button>
            <button type="button" className="btn btn-outline-primary px-4 mx-3">預覽文章</button>
        </div>

    </Fragment>)
}
export default WriteSetting