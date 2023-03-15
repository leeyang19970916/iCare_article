import React, { Fragment } from "react"
import { Route, NavLink, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from "react-redux";
import {copyState} from "../../../../store/articleSlice"

const TableTitle = (props) => {
    let { id,date, majTitle, minTitle } = props.item
    const goPath = useHistory();//設常數接收useHistory()回傳的物件
    let dispatch = useDispatch()
    let listStore=useSelector(state=>state.list) || []

    const previewArticle_Detail=()=>{
        // console.log(id,"idddd")
        let article=listStore.find(item=>item.id===id)
        dispatch(copyState(article))
        // console.log(article,"article")
        goPath.push(`/editArticle/${id}`)
    }
    return (
        <Fragment>
            <div className="text-dark mainTitle cursor-pointer" onClick={previewArticle_Detail} >{majTitle}</div>
            <div className="text-dark minTitle">{minTitle}</div>
            <div className="dropdown table-group  d-flex justify-content-end">
                <div className="text-secondary date  dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> {date} </div>
                <ul className="dropdown-menu date" aria-labelledby="dropdownMenuLink">
                    <li className="text-primary fw-bolder fs-6">文章記錄</li>
                    <li><a className="dropdown-item" href="#">2023/02/05 12:05<FontAwesomeIcon icon="fa-solid fa-arrow-right" />建立文章</a></li>
                    <li><a className="dropdown-item" href="#">2023/02/06 09:30<FontAwesomeIcon icon="fa-solid fa-arrow-right" />提交審核</a></li>
                    <li><a className="dropdown-item" href="#">2023/02/10 14:23<FontAwesomeIcon icon="fa-solid fa-arrow-right" />建立文章</a></li>
                    <li><a className="dropdown-item" href="#">2023/02/12 12:05<FontAwesomeIcon icon="fa-solid fa-arrow-right" />發布文章</a></li>
                </ul>
            </div>
        </Fragment>
    )
}
export default TableTitle